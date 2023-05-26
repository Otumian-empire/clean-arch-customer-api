### Get all users

-   GET https://localhost:7000/customers
-   Accept: application/json

### Get user by id

-   GET https://localhost:7000/customers/
-   Accept: application/json

### Create customer

-   POST https://localhost:7000/customers
-   Content-Type: application/json

```json
{
    "username": "nickchapsas",
    "fullName": "Nick Chapsas",
    "email": "nick@nickchapsas.com",
    "dateOfBirth": "1993-04-20"
}
```

### Update customer

-   PUT https://localhost:7000/customers/
-   Content-Type: application/json

```json
{
    "username": "chapsas",
    "fullName": "Nick Chapsas",
    "email": "nick@nickchapsas.com",
    "dateOfBirth": "1993-04-20"
}
```

### Delete user

-   DELETE https://localhost:7000/customers/
-   Accept: application/json
