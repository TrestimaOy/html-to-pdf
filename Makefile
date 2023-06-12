all:
	docker build --no-cache -t html-to-pdf . && docker run --init -p 8080:8080 -ti html-to-pdf
