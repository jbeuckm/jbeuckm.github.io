/****************************************************/
/* Example Program For LCD6610                      */
/* MCU      : Arduino Nano                          */
/* By       : Gravitech                             */
/* Function : Demo Interface LCD6610 (Epson driver) */
/****************************************************/
/* Interface LCD6610 to Arduino Nano                */
/*    Nano  --> LCD6610                             */
/*    D2    --> BL                                  */
/*    D3    --> #CS                                 */
/*    D4    --> SCLK                                */
/*    D5    --> SDATA                               */
/*    D6    --> #RESEET                             */
/*    +5V   --> VCC,VBL                             */
/*    GND   --> GND                                 */
/****************************************************/

// Define Software SPI Pin Signal

//#define BL 2          // Digital 2 --> BL
#define CS 3          // Digital 3 --> #CS
#define CLK 4         // Digital 4 --> SCLK
#define SDA 5         // Digital 5 --> SDATA
#define RESET 6       // Digital 6 --> #RESET


// Epson S1D15G10 Command Set
#define DISON       0xaf
#define DISOFF      0xae
#define DISNOR      0xa6
#define DISINV      0xa7
#define COMSCN      0xbb
#define DISCTL      0xca
#define SLPIN       0x95
#define SLPOUT      0x94
#define PASET       0x75
#define CASET       0x15
#define DATCTL      0xbc
#define RGBSET8     0xce
#define RAMWR       0x5c
#define RAMRD       0x5d
#define PTLIN       0xa8
#define PTLOUT      0xa9
#define RMWIN       0xe0
#define RMWOUT      0xee
#define ASCSET      0xaa
#define SCSTART     0xab
#define OSCON       0xd1
#define OSCOFF      0xd2
#define PWRCTR      0x20
#define VOLCTR      0x81
#define VOLUP       0xd6
#define VOLDOWN     0xd7
#define TMPGRD      0x82
#define EPCTIN      0xcd
#define EPCOUT      0xcc
#define EPMWR       0xfc
#define EPMRD       0xfd
#define EPSRRD1     0x7c
#define EPSRRD2     0x7d
#define NOP         0x25


// 12-bit color definitions from http://www.arduino.cc/cgi-bin/yabb2/YaBB.pl?num=1237036119/60
#define GREEN			0xE0
#define RED			0x1C
#define BLUE			0x03
#define YELLOW			0xFC
#define TEAL			0xE3
#define PINK			0x1F
#define BLACK			0x00
#define WHITE			0xFF


#define CS0 PORTD &= B11110111;
#define CS1 PORTD |= B00001000;

#define CLK0 PORTD &= B11101111;
#define CLK1 PORTD |= B00010000;

#define SDA0 PORTD &= B11001111;
#define SDA1 PORTD |= B00100000;

#define SendData1 PORTD &= B11101111; PORTD |= B00110000;
#define SendData0 PORTD &= B11001111; PORTD |= B00010000;

#define RESET0 PORTD &= B10111111;
#define RESET1 PORTD |= B01000000;


/*************************************************************/
/*            Function prototypes                            */
/*************************************************************/

void shiftBits(byte);
void sendData(byte);
void sendCMD(byte);

/*************************************************************/
/*            Function definitions                           */
/*************************************************************/

/**************************************/
/*        Shifting SPI bit out        */
/**************************************/
void shiftBits(byte b)
{
  if ((b&128)!=0) { SendData1 } else { SendData0 }
  if ((b&64)!=0) { SendData1 } else { SendData0 }
  if ((b&32)!=0) { SendData1 } else { SendData0 }
  if ((b&16)!=0) { SendData1 } else { SendData0 }
  if ((b&8)!=0) { SendData1 } else { SendData0 }
  if ((b&4)!=0) { SendData1 } else { SendData0 }
  if ((b&2)!=0) { SendData1 } else { SendData0 }
  if ((b&1)!=0) { SendData1 } else { SendData0 }
}




/**************************************/
/*        Sending data                */
/**************************************/
void sendData(byte data) {
  CS0
  CLK1;
  SendData1

  shiftBits(data);
}

/**************************************/
/*        Sending command             */
/**************************************/
void sendCMD(byte data) {
  CS0
  CLK1;
  SendData0

  shiftBits(data);
}

void lcd_set_box(byte x1, byte y1, byte x2, byte y2)
{
  sendCMD(CASET);   // page start/end ram
  sendData(x1);     // for some reason starts at 2
  sendData(x2);

  sendCMD(PASET);   // column start/end ram
  sendData(y1);
  sendData(y2);
}

// modified from http://www.arduino.cc/cgi-bin/yabb2/YaBB.pl?num=1237036119/60
void lcd_clear(byte color, byte x1, byte y1, byte x2, byte y2)
{
  lcd_set_box(x1,y1,x2,y2);
  sendCMD(RAMWR);
  for(unsigned int i = 0; i < (((x2-x1+1)*(y2-y1+1)) / 2); i++)
  {
    sendData((color >> 4) & 0xFF);
    sendData(((color & 0xF) << 4) | ((color >> 8) & 0xF));
    sendData(color & 0xFF);
  }
}



void lcd_init()
{
  // Initial state
  CS1
  SDA1
  CLK1

  // Hardware Reset LCD
  RESET0
  delay(10);
  RESET1
  delay(2000);


  // Display control
  sendCMD(DISCTL);
  sendData(0);
  sendData(0x20);
  sendData(0);


  sendCMD(COMSCN);  	// comscn
  sendData(0x01);

  sendCMD(OSCON);  		// oscon

  sendCMD(SLPOUT);  	// sleep out

  sendCMD(VOLCTR);  	// electronic volume, this is kinda contrast/brightness
  sendData(0x28);       // this might be different for individual LCDs
  sendData(0x03);


  sendCMD(PWRCTR);  	// power ctrl
  sendData(0x0f);      	// everything on, no external reference resistors
  delay(100);


  sendCMD(DISINV); 	// display mode

  // Data control from http://www.arduino.cc/cgi-bin/yabb2/YaBB.pl?num=1237036119/60
  sendCMD(DATCTL);
  sendData(0x03);
  sendData(0x00);
  sendData(0x04);



  sendCMD(RGBSET8);   	// setup color lookup table
    // color table
    sendData(0);
    sendData(2);
    sendData(4);
    sendData(6);
    sendData(8);
    sendData(10);
    sendData(12);
    sendData(15);
    // GREEN
    sendData(0);
    sendData(2);
    sendData(4);
    sendData(6);
    sendData(8);
    sendData(10);
    sendData(12);
    sendData(15);
    //BLUE
    sendData(0);
    sendData(4);
    sendData(9);
    sendData(15);



    // request 8 bits/pixel mode
    sendCMD(0x3a);
    sendData(0x03);


    sendCMD(NOP);
    lcd_clear(28,0,0,131,131);
    sendCMD(DISON);    // display on

//   for (int i = 0; i < 50; i++){   // this loop adjusts the contrast, change the number of iterations to get
//      sendCMD(VOLUP);           // desired contrast.  This might be different for individual LCDs
//      delay(20);
//   }
}



/*************************************************************/
/*            Main Code Start here                           */
/*************************************************************/


float fViewRectReal;
float fViewRectImg;
float fMagLevel;

const byte rows = 132;
const byte cols = 132;
const byte halfRows = 66;
const byte halfCols = 66;

const byte maxIterations = 11;
byte n;

int mandX;
int mandY;

float fCImg;
float fCReal;
float fZImg;
float fZReal;

float fZRealSquared;
float fZImgSquared;

boolean ready = false;
int pixel1;
int color;

float forceX, forceY;

float magChange, pan;

void setup()
{
  DDRD |= B11111100;   // Set SPI pins as output
  PORTD |= B01111100;  // Set SPI pins HIGH
  lcd_init();
  delay(500);
  lcd_clear(BLACK,0,0,131,131);

  // setup fractal viewport
  fViewRectReal = -.76;
  fViewRectImg = 0;
  fMagLevel = 0.02;


  sendCMD(PASET);
  sendData(0);
  sendData(131);
  sendCMD(CASET);
  sendData(0);
  sendData(131);
}

void loop()
{

  sendCMD(RAMWR);

  for (mandY=-halfRows; mandY < halfRows; mandY++) {

    // imaginary component of "c"
    fCImg = fViewRectImg + mandY * fMagLevel;

    for (mandX=-halfCols; mandX < halfCols; mandX++) {

      // real component of "c"
      fCReal = fViewRectReal + mandX * fMagLevel;
      fZReal = fCReal;
      fZImg = fCImg;

      // apply the formula...
      for (n=0; n < maxIterations; n++) {
        fZRealSquared = fZReal * fZReal;
        fZImgSquared = fZImg * fZImg;

	// have we escaped?
	if (fZRealSquared + fZImgSquared > 4) {
          break;
	}

        // z = z^2 + c
        fZImg = 2 * fZReal * fZImg + fCImg;
        fZReal = fZRealSquared - fZImgSquared + fCReal;
      }

      color = 1 << n;

      // only output 2 pixels at a time when ready
      if (ready) {
        sendData((pixel1 >> 4) & 0xFF);
        sendData(((pixel1 & 0xF) << 4) | ((color >> 8) & 0xF));
        sendData(color & 0xFF);

        ready = false;
      }
      else {
        ready = true;
        pixel1 = color;
      }

    }
  }

}
