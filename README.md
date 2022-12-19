# CS-623-CRUD

## Backend APIs to perform CRUD operations on Database.

For Post, Update use the content in "body" : { "raw" :{} }

 ```
 API to create a client
 {
    "item": [{
            "name": "Create Client",
            "request": {
                "method": "POST",
                "header": [],
                "body": {
                    "mode": "raw",
                    "raw": "{\r\n    \"idclient\" : 455,\r\n    \"full_name\": \"Mehul A\",\r\n    \"salary\" : 9000,\r\n    \"education\" : \"Masters\",\r\n    \"externalid\": 395,\r\n    \"address1\": \"Jersey City\",\r\n    \"address2\": \"New Jersey\",\r\n    \"telephone\": \"42382332\",\r\n    \"secretanswer\": \"hello\"\r\n}",
                    "options": {
                        "raw": {
                            "language": "json"
                        }
                    }
                },
                "url": {
                    "raw": "http://localhost:8081/api/client",
                    "protocol": "http",
                    "host": [
                        "localhost"
                    ],
                    "port": "8081",
                    "path": [
                        "api",
                        "client"
                    ]
                },
                "description": "API to capture client data, before creating an account."
            },
            "response": []
        }
        
 ```
        Client get request
 ```    {
            "name": "Retrive Client by Id",
            "request": {
                "method": "GET",
                "header": [],
                "url": {
                    "raw": "http://localhost:8081/api/client/2",
                    "protocol": "http",
                    "host": [
                        "localhost"
                    ],
                    "port": "8081",
                    "path": [
                        "api",
                        "client",
                        "2"
                    ]
                },
                "description": "Retrieves the client by id, specified in following syntax\n\n/api/client/:id"
            },
            "response": []
        }
```
        Update Client by id
```
        {
            "name": "Update Client by id",
            "request": {
                "method": "PUT",
                "header": [],
                "body": {
                    "mode": "raw",
                    "raw": "{\r\n    \"idclient\": 457,\r\n    \"full_name\": \"Mehul A\",\r\n    \"salary\": 9500,\r\n    \"education\": \"Masters\",\r\n    \"externalid\": 395,\r\n    \"address1\": \"Jersey City\",\r\n    \"address2\": \"New Jersey\",\r\n    \"telephone\": \"42382632\",\r\n    \"secretanswer\": \"world\"\r\n}",
                    "options": {
                        "raw": {
                            "language": "json"
                        }
                    }
                },
                "url": {
                    "raw": "http://localhost:8081/api/client/2",
                    "protocol": "http",
                    "host": [
                        "localhost"
                    ],
                    "port": "8081",
                    "path": [
                        "api",
                        "client",
                        "2"
                    ]
                }
            },
            "response": []
        }
```
        
        Delete Client by id
        
```
        {
            "name": "Delete Client by id Copy",
            "request": {
                "method": "DELETE",
                "header": [],
                "url": {
                    "raw": "http://localhost:8081/api/client/2",
                    "protocol": "http",
                    "host": [
                        "localhost"
                    ],
                    "port": "8081",
                    "path": [
                        "api",
                        "client",
                        "2"
                    ]
                }
            },
            "response": []
        }
    ]
}
 ```
