test:
	@NODE_ENV=test ./node_modules/.bin/mocha test --reporter spec


.PHONY: test