package {
	import flash.display.Bitmap;
	import flash.display.BitmapData;
	import flash.display.Sprite;
	import flash.events.Event;
	import flash.events.KeyboardEvent;
	import flash.events.MouseEvent;
	import flash.text.TextField;
	import flash.ui.Keyboard;

	[SWF(width="132",height="132")]
	public class MandelbrotSet extends Sprite
	{
		private var _bitmapData:BitmapData;
		private var _bitmap:Bitmap;
		
		private var mandX:int;
		private var mandY:int;
		
		private const maxIterations:uint = 200;
		private var n:uint;
		
			
		// size and position of the rect on the imaginary plane
		private var fViewRectReal:Number = -1.3;
		private var fViewRectImg:Number = 0.0;
		private var fMagLevel:Number = 0.02;
		private var magChange:Number = 1.0;

		private var fCReal:Number;
		private var fZReal:Number;
		private var fZImg:Number;

		private var fZRealSquared:Number;
		private var fZImgSquared:Number;
		
		private const rows:uint=132;
		private const cols:uint=132;
		private const halfRows:int=66;
		private const halfCols:int=66;

		private var _splotchPalette:Array = new Array(0x2F319B, 0xD3EDFA, 0xEBF174, 0xFFA3B6, 0x52CAE4, 0xF71230, 0xC4E318, 0x27C7EF, 0xD746A8, 0x10BAE2, 0xE12476);
		private var _spectrumPalette:Array = new Array();

		private var _goButton:Sprite;

		public function MandelbrotSet()
		{
			
			var intervalSize:uint = maxIterations/_splotchPalette.length;
			for (var i:int=0; i<maxIterations; i++) {
				var position:uint = Math.floor(i / intervalSize);
				var lastColor:uint = _splotchPalette[position];
				var nextColor:uint = _splotchPalette[position+1];
				var progress:Number = (i%intervalSize)/intervalSize;
				_spectrumPalette.push(interpolateColor(lastColor, nextColor, progress));				
			}

			
			_bitmapData = new BitmapData(rows, cols);
			_bitmap = new Bitmap(_bitmapData);

			// size and position of the rect on the imaginary plane
			fViewRectReal = 0;
			fViewRectImg = .2;
			fMagLevel = 0.02;
			

			_goButton = new Sprite();
			_goButton.graphics.beginFill(0x008800);
			_goButton.graphics.drawCircle(30,30,10);
			var tf:TextField = new TextField();
			tf.text = "go.";
			tf.x = 22;
			tf.y = 22;
			tf.selectable = false;
			_goButton.addChild(tf);
			_goButton.addEventListener(MouseEvent.CLICK, _go);
			addChild(_goButton);

		}
		
		private function _go(event:Event):void {
			addEventListener(Event.ENTER_FRAME, _frame);
			stage.addEventListener(KeyboardEvent.KEY_DOWN, _keyDown);
			stage.addEventListener(KeyboardEvent.KEY_UP, _keyUp);
			removeChild(_goButton);
			addChild(_bitmap);
			stage.focus = this;
		}
		
		private function _frame(event:Event):void {
		
			fMagLevel *= magChange;

			var panX:Number = (mouseX - rows/2) * fMagLevel/25;
			fViewRectReal += panX;

			var panY:Number = (mouseY - cols/2) * fMagLevel/25;
			fViewRectImg += panY;


			for (mandY=-halfRows; mandY < halfRows; mandY++)
			{
				// imaginary component of "c"
				var fCImg:Number = fViewRectImg + mandY * fMagLevel;
				
				for (mandX=-halfCols; mandX < halfCols; mandX++)
				{
					// real component of "c"
					fCReal = fViewRectReal + mandX * fMagLevel;
					fZReal = fCReal;
					fZImg = fCImg;


					// apply the formula...
					for (n=0; n < maxIterations; n++)
					{
						fZRealSquared = fZReal * fZReal;
						fZImgSquared = fZImg * fZImg;
						
						// have we escaped?
						if (fZRealSquared + fZImgSquared > 4)
						{
							break;
						}
						
						// z = z^2 + c
						fZImg = 2 * fZReal * fZImg + fCImg;
						fZReal = fZRealSquared - fZImgSquared + fCReal;
					}

					_bitmapData.setPixel(mandX + halfCols, mandY + halfRows, _spectrumPalette[n]);

				}

			}
			

		}
		
		
		private function _keyDown(event:KeyboardEvent):void {
			switch (String.fromCharCode(event.keyCode)) {
				case ('X') :
					magChange = 1.1;
					break;
				case ('Z') :
					magChange = 0.9;
					break;
			}
		}
		private function _keyUp(event:KeyboardEvent):void {
			switch (String.fromCharCode(event.keyCode)) {
				case ('X') :
				case ('Z') :
					magChange = 1;
					break;
			}
		}

		private static function interpolateColor(fromColor:uint, toColor:uint, progress:Number):uint
		{
			var q:Number = 1-progress;
			var fromA:uint = (fromColor >> 24) & 0xFF;
			var fromR:uint = (fromColor >> 16) & 0xFF;
			var fromG:uint = (fromColor >>  8) & 0xFF;
			var fromB:uint =  fromColor        & 0xFF;
			var toA:uint = (toColor >> 24) & 0xFF;
			var toR:uint = (toColor >> 16) & 0xFF;
			var toG:uint = (toColor >>  8) & 0xFF;
			var toB:uint =  toColor        & 0xFF;
			var resultA:uint = fromA*q + toA*progress;
			var resultR:uint = fromR*q + toR*progress;
			var resultG:uint = fromG*q + toG*progress;
			var resultB:uint = fromB*q + toB*progress;
			var resultColor:uint = resultA << 24 | resultR << 16 | resultG << 8 | resultB;
			return resultColor;
		}
	}
}
