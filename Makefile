FILE=example.js

ECMA_VERSION=ES6

TSC_BIN=tsc
TSC_FLAGS= 

NODE_BIN=node
NODE_FLAGS=

all: $(FILE)

%.js: %.ts
	$(TSC_BIN) --target $(ECMA_VERSION) $(TSC_FLAGS) --out $@ $^

.PHONY=run
run: clean all
	$(NODE_BIN) $(NODE_FLAGS) $(FILE)

.PHONY=clean
clean:
	rm -f $(FILE)
