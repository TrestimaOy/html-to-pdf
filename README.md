# HTML TO PDF Converter Microservice

Docker container to convert HTML to PDF. The conversion will be done with [wkhtmltopdf](https://wkhtmltopdf.org/)

## Prerequisites

1. Docker

## Getting Started

    $ docker build --no-cache -t html-to-pdf .
    $ docker run --init -p 8080:8080 -ti -e MAX_BODY_SIZE_MB=128 html-to-pdf

## Example Request

   $ curl -X POST 
        http://localhost:8080 
        -H 'Content-Type: application/json' 
    	-d '{"content":"&lt;h1&gt;Test&lt;/h1&gt;&lt;p&gt;Hello world&lt;/p&gt;","options":{ "pageSize": "letter" }}'

- content is the HTML which should be converted
- options are optional parameters

## License
This is public domain.