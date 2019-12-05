# Learning Cards API description
   <strong>1. AUTHENTICATION</strong>  
    Learning Cards API uses JWT (tokens) for authentication.  
    To get a JWT token make a POST API call with 
    valid credentials. If valid credentials are provided two
    tokens will be returned in the response body section. These two tokens are 
    access and refresh tokens.  
    Access token lifetime is 5 minutes.  
    Refresh token lifetime is 1 day.  
    The validity of a token can be checked by API POST call:
    <code>/api/token/verify/</code> with 
    <code>token</code> field containing the token to be verified.  
<strong>2. ENDPOINTS</strong>  
1. User login  
    For logging a user in, a POST API request containing valid 
    credentials in the body is required.   
    API endpoint for that is:  <code>\<api address\>/api/token/</code>  
    The body should contain valid credentials as shown below.  
    ```json
    {
        "username": "<username>",
        "password": "<password>"
    }
    ```
    If valid credentials were provided, the proper tokens will be returned 
    in the response body as shown below.
    ```json
    {
        "refresh": "<JWT refresh token>",
        "access": "<JWT access token>"
    }
    ```
    In case of invalid credentials a 401 response will be returned 
    with the proper message in the body.  
    There is an example of the body of such a response below.  
    ```json
    {
        "detail": "No active account found with the given credentials"
    }
    ```
2. Register user  
    Endpoint for this purpose is <code>\<api address\>/api/register/</code>.
    In order to register a user, a POST API request containing
    valid data in the body must be sent. The user's data should be
    formed as below.
    ```json
    {
       "username": "<username>",
       "password": "<password>",
       "email": "<email>"
    }
    ```
    If all provided fields are valid the response with following 
    body is returned.
    ```json
    [
        "User created"
    ]
    ```
    If one of the fields is not provided the API will return
    a response with corresponding error. The form of such an error below.
    ```json
    {
        "username": [ "This field is required." ],
        "email": [ "This field is required." ],
        "password": [ "This field is required." ]
    }
    ```
    If provided username is already assigned to another user, the body
    of the response will be as below.
    ```json
    {
        "username": [ "A user with that username already exists." ]
    }
    ```
    If the provided email is invalid, the JSON in the response will contain field  
    ``"email": [ "Enter a valid email address." ]``.  
    If any of the fields will be left empty the response body will contain  
     ``"email": [ "This field may not be blank." ]`` (in case of an empty email field).
    
3. Acquire learning sets  
    Endpoint for this purpose is <code>\<api address\>/api/sets/</code>.
    To acquire learning sets, a GET request needs to be sent. If a valid
    JWT access token is not included, the API will return a response with 
    a corresponding error (look below). 
    ```json
    {
        "detail": "Given token not valid for any token type",
        "code": "token_not_valid",
        "messages": [
            {
                "token_class": "AccessToken",
                "token_type": "access",
                "message": "Token is invalid or expired"
            }
        ]
    }
    ```
    If the token is valid the response body will contain all learning sets
    which belong to the logged-in user. Example below.
    ```
    [  
       {
        "id": <id1>,
        "name": "<set name>",
        "owner": <current user id>,
        "creation_date": "<creation date>"
       },
       {
        "id": <id2>,
        "name": "<set name>",
        "owner": <current user id>,
        "creation_date": "<creation date>"
       }
    ]
    ```
    If a set ID is already known, there is an option to get information
    related to that learning set. To do so, the GET request should be sent to
    <code>\<api address\>/api/sets/\<id\></code>. Such a request will return a response 
    in the same form as the previous one, but the list will contain only one element having the provided ID.
4. Acquire sets' items  
    Endpoint for this purpose is <code>\<api address\>/api/items/</code>.
    This endpoint works the same way as the previous one for acquiring learning sets.
    Token rules are the same. The difference is that a request returns all
    items from database so it is not recommended to use this endpoint this way.  
    Another way is to get item by its id. The endpoint for it is 
    <code>\<api address\>/api/items/\<id\></code>. Response body will contain
    only chosen item in this case.  
    Recommended way is to acquire items by learning set id they belong to. The endpoint
    for such a case is <code>\<api address\>/api/items/?set_id=\<set_id\></code> or
    <code>\<api address\>/api/items/?learning_set_id=<\set_id\></code>.  
    Example call is ``http://127.0.0.1:8000/api/items/?set_id=2`` and the response body 
    has the form shown below.
    ```
    [
        {
            "id": <id1>,
            "term": "<term>",
            "definition": "<definition>",
            "learning_set_id": <provided learning set id>
        },
        {
            "id": <id1>,
            "term": "<term>",
            "definition": "<definition>",
            "learning_set_id": <provided learning set id>
        }
        ...
    ]
    ```
5. Searching learning sets by name  
    Searching requires an additional ``search`` argument for GET request. 
    The endpoint is ``<api address>/api/sets/?search=<phrase>``.  
    Example ``http://127.0.0.1:8000/api/sets/?search=name``. JWT token rules
    are the same as when getting sets (point 3).
6. Refresh JWT token  
    To refresh a JWT access token, a refresh token is required. In order to
    refresh an access token (get a new one), a POST API request should be sent.
    The request body should have ``refresh`` field containing a valid refresh token.
    If the refresh token is valid, a response with status 200 (OK) will be returned and 
    there will be a new access token in the body of the response (shown below). 
    ```json
    {
        "access": "<new access token>"
    }
    ```
    If an invalid refresh token is provided, the response will have status 401 (Unauthorized)
    and the body will contain the following JSON.
    ```json
    {
        "detail": "Token is invalid or expired",
        "code": "token_not_valid"
    }
    ```
    To make a request to this API endpoint, an access token is not required.
7. Verify JWT token  
    The endpoint for this purpose is ``<api address>/api/token/verify/``. To verify 
    token validity, a POST request should be sent. The request body should contain 
    ``token`` field with a token to be verified. If the token is valid, a response with
    status 200 (OK) will be returned. If the provided token is invalid, a 
    response with status 401 (Unauthorized) will be returned and its body will contain JSON shown below.
    ```json
    {
        "detail": "Token is invalid or expired",
        "code": "token_not_valid"
    }
    ```
    To make a request to this API endpoint, an access token is not required.
8. Adding new items  
    Endpoint for adding items is ``<api address>/api/items/add/``.
    Body of the request should be a list of items with fields `term`, `definition`, `learning_set_id`:
    ```
    [
        {
            "term": "<term>",
            "definition": "<definition>",
            "learning_set_id": <learning set id>
        },
        {
            "term": "<term>",
            "definition": "<definition>",
            "learning_set_id": <learning set id>
        }
        ...
    ]
    ```
    This will create the items if all of them are valid,
    and return a list containing them (same format as the acquire endpoint) with status 201.  
    If there is an error, the response (with status 400) will contain a list of errors,
    and no items will be created.
9. The rest of endpoints  
    Since project is no longer maintained, the rest of endpoints won't be described in this file.
    

