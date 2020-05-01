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
| GET      | /api/strains     | will get the strains                            |
| GET      | /api/strains/:id | will get the strain at the specified id         |
| GET      | /api/saved       | will get all the users saved strain             |
| GET      | /api/saved/:id   | will get the users saved strain at specified id |
| POST     | /api/strains/:id | will save specific strain id to the user        |
| DELETE   | /api/saved/:id   | will delete users saved strain                  |