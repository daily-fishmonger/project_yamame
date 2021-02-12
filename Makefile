build:
	docker build -t yamame .

run:
	@make build
	docker run --rm -p 8080:8080 --name yamame_app --volume ${PWD}:/code -d yamame

exec:
	docker exec -it yamame_app /bin/bash
