# Learning Cards API description
<strong>1. AUTHENTICATION</strong>  
Learning Cards API uses JWT tokens for authentication.  
To get JWT token make a POST api call with 
valid credentials. If valid credentials are provided two
tokens will be returned in the response body section. These two tokens are 
access and refresh tokens.  
Access token lifetime is 5 minutes.  
Refresh token lifetime is 1 day.  
The validity of a token can be checked by api POST call:
<code>/api/token/verify/</code> with 
<code>token</code> field containing the token to be verified.  
<strong>2. ENDPOINTS</strong>  

