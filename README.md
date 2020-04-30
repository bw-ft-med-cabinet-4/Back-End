# Back-End

## Deployed Database URL

https://medcabinetbackend.herokuapp.com/

## Models

### Users

{
    
    username: string,  *REQUIRED*   
    password: string  *REQUIRED*
    
}

### Strains

{
    user_id: int,              *REQUIRED*
    strain: string,            *REQUIRED*
    effect: string,            *REQUIRED*
    medical_effect, string     *REQUIRED*
    flavor, string             *REQUIRED*
    type, string               *REQUIRED*
    thc, string                *REQUIRED*
    cbd, string                *REQUIRED*
    description, string        *REQUIRED*
}

# Endpoints

## Users

| POST         | /api/auth/register | Creates User       |
| POST         | /api/auth/login    | Creates JWT        |


## Strains
| GET      | /api/saved       | will get the users saved strain          |
| POST     | /api/strains/:id | will save specific strain id to the user |
| DELETE   | /api/saved/:id   | will delete users saved strain           |