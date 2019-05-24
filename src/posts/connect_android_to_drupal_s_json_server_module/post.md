---
path: "/connect_android_to_drupal_s_json_server_module"
title: "Connect Android to Drupal’s JSON Server Module"
date: "2011-05-03"
tags: ["android","programming","Uncategorized"]
hexagonImages: ["Screen%20shot%202011-07-21%20at%2012.08.49%20AM.png_hexagon.png"]
---

 [![](android_drupal.png)](android_drupal.png)

The Android SDK comes with a SampleSyncAdapter project for implementing a synced connection to a cloud-type service. The class NetworkUtilities takes care of making the actual HTTP requests, and generally has to be tailored to work with a particular cloud service (apart from the sample server app included with the SDK).

Here is a base class that handles the session-based authentication for Drupal’s JSON Server module. Extend this class to implement the calls for a particular service model via Drupal / JSON Server.

This is working with Drupal 6 + Services 3 + REST Server 2 + JSON Server 2

Source: [https://github.com/jbeuckm/Android-SyncAdapter-JSON-Server-Example](https://github.com/jbeuckm/Android-SyncAdapter-JSON-Server-Example)

```
package com.puny.android.network.util;

import android.content.Context;
import android.os.Handler;
import android.util.Log;

import org.apache.http.protocol.HTTP;
import org.apache.http.entity.StringEntity;
import org.apache.http.HttpResponse;
import org.apache.http.HttpStatus;
import org.apache.http.client.HttpClient;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.conn.params.ConnManagerParams;
import org.apache.http.impl.client.DefaultHttpClient;
import org.apache.http.message.BasicHeader;
import org.apache.http.params.HttpConnectionParams;
import org.apache.http.params.HttpParams;

import org.json.JSONObject;
import org.json.JSONException;

import java.io.IOException;
import java.io.BufferedReader;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.util.Map;
import java.util.HashMap;
import java.util.Iterator;

/\*
 \* This base class handles session-based authentication for the "JSON Server" Drupal module.
 \* Extend this class, change to your BASE\_URL and add requests for a particular REST data model implementation.
 \*/
public class DrupalJSONServerNetworkUtilityBase {

	protected static String TAG = "JSONServerNetworkUtil";

	public static final String PARAM\_SESSION\_ID = "sessid";
	public static final String PARAM\_USERNAME = "name";
	public static final String PARAM\_PASSWORD = "pass";

	public static final int REGISTRATION\_TIMEOUT = 30 \* 1000; // ms
    
    public static final String BASE\_URL = "http://\[YOUR JSON SERVER REST ENDPOINT\]";

    public static final String CONNECT\_URI = BASE\_URL + "/system/connect.json";
    public static final String AUTH\_URI = BASE\_URL + "/user/login.json";


    protected static HttpClient mHttpClient;
    protected static String mSessId;


    /\*\*
     \* Configures the httpClient to connect to the URL provided.
     \*/
    public static void maybeCreateHttpClient() {
        if (mHttpClient == null) {
            mHttpClient = new DefaultHttpClient();
            final HttpParams params = mHttpClient.getParams();
            HttpConnectionParams.setConnectionTimeout(params,
                REGISTRATION\_TIMEOUT);
            HttpConnectionParams.setSoTimeout(params, REGISTRATION\_TIMEOUT);
            ConnManagerParams.setTimeout(params, REGISTRATION\_TIMEOUT);
        }
    }

    /\*\*
     \* Executes the network requests on a separate thread.
     \* 
     \* @param runnable The runnable instance containing network mOperations to
     \*        be executed.
     \*/
    public static Thread performOnBackgroundThread(final Runnable runnable) {
        final Thread t = new Thread() {
            @Override
            public void run() {
                try {
                    runnable.run();
                } finally {

                }
            }
        };
        t.start();
        return t;
    }
    
    

    /\*\*
     \* Connects to the JSON server, authenticates the provided username and
     \* password.
     \* 
     \* @param username The user's username
     \* @param password The user's password
     \* @param handler The hander instance from the calling UI thread.
     \* @param context The context of the calling Activity.
     \* 
     \* @return boolean The boolean result indicating whether the user was
     \*         successfully authenticated.
     \*/
    public static boolean authenticate(String username, String password,
        Handler handler, final Context context) {
    	
        mSessId = connectForSessId(handler, context);
        Log.d(TAG, "sessid = "+mSessId);
        
        if (mSessId == null) {
        	return false;
        }
        
        Map params = new HashMap();
        params.put(PARAM\_SESSION\_ID, mSessId);
        params.put(PARAM\_USERNAME, username);
        params.put(PARAM\_PASSWORD, password);

        JSONObject json = prepareAndSendHttpPost(AUTH\_URI, params);
        
        if (json == null) {
        	Log.d(TAG, "auth failed");
        	return false;
        }
        else {
        	Log.d(TAG, "auth successful "+json.toString());
        	return true;
        }

    }
    
    /\*
     \* This handles the initial POST to JSON Server to retrieve the sessid.
     \*/
    protected static String connectForSessId(final Handler handler, final Context context) {
    	Log.d(TAG, "connectForSessId()");
    	
    	JSONObject json = prepareAndSendHttpPost(CONNECT\_URI, null);
    	if (json != null) {
    		try {
    			return json.getString("sessid");
    		}
    		catch (JSONException e) {
    			Log.d(TAG, "could not find sessid from system.connect");
    			return null;
    		}
    	}
    	else {
    		return null;
    	}
    }
    
    

    /\*
     \* Does all the work for JSON POST requests.
     \* 
     \* @param URI The URI for the post
     \* @param params The variables to be converted to JSON and POSTed with this request.
     \*/
    protected static JSONObject prepareAndSendHttpPost(String URI, Map params) {
	    JSONObject json = null;
	    try {
	        json = new JSONObject();
	        if (params != null) {
		        Iterator> it = params.entrySet().iterator();
		        while (it.hasNext()) {
		            Map.Entry pair = (Map.Entry)it.next();
		            json.put(pair.getKey().toString(), pair.getValue());
		        }
	        }
	    }
	    catch (JSONException e) {
	    	Log.e(TAG, "unable to encode JSON for http request");
	    }
	
	    StringEntity se = null;
	    try {
	    	se = new StringEntity(json.toString());    
	        se.setContentEncoding(new BasicHeader(HTTP.CONTENT\_TYPE, "application/json"));  
	    }
	    catch (Exception e) {
	    	Log.d(TAG, "unable to create string entity");
	    }

	    final HttpPost post = new HttpPost(URI);
        post.setEntity(se);  
	
	    post.setHeader("Accept", "application/json");
	    post.setHeader("Content-type", "application/json");
	    
	    maybeCreateHttpClient();
	
	    HttpResponse resp = null;
	    try {
	        
	    	resp = mHttpClient.execute(post);
	        
	        if (resp.getStatusLine().getStatusCode() == HttpStatus.SC\_OK) {
	            if (Log.isLoggable(TAG, Log.VERBOSE)) {
	                Log.v(TAG, "Successful POST");
	            }
	            return decodeJSONResponse(resp);
	        } else {
	            if (Log.isLoggable(TAG, Log.VERBOSE)) {
	                Log.v(TAG, "Error POSTing: " + resp.getStatusLine());
	            }
	            return null;
	        }
	    } catch (final IOException e) {
	        if (Log.isLoggable(TAG, Log.VERBOSE)) {
	            Log.v(TAG, "IOException when POSTING", e);
	        }
	        return null;
	    } finally {
	        if (Log.isLoggable(TAG, Log.VERBOSE)) {
	            Log.v(TAG, "POST completing");
	        }
	    }
	}

    
    /\*
     \* Process the raw HttpResponse into a JSON object.
     \*/
    protected static JSONObject decodeJSONResponse(HttpResponse resp) {

    	InputStream is = null;
        try {
        	is = resp.getEntity().getContent();
        }
        catch (IOException e) {
        	Log.d(TAG, "unable to get content from response entity");
        	e.printStackTrace();
        	return null;
        }

        String in = convertStreamToString(is);

        JSONObject json = null;
        try {
            json = new JSONObject(in);
        }
		catch (JSONException e) {
			Log.d(TAG, "could not decode JSON response from: "+in);
		}
		
		return json;
    }
    
    
    /\*
     \* Server responses are in stream format. This delivers the data as a String for easy parsing.
     \*/
    protected static String convertStreamToString(InputStream is) {

        BufferedReader reader = new BufferedReader(new InputStreamReader(is));
        StringBuilder sb = new StringBuilder();

        String line = null;
        try {
            while ((line = reader.readLine()) != null) {
                sb.append(line + "\\n");
            }
        } catch (IOException e) {
            e.printStackTrace();
        } finally {
            try {
                is.close();
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
        return sb.toString();
    }
}

```
