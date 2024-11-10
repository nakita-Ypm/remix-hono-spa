deps:
	rm -rf pnpm-lock.yaml && rm -rf pnpm-lock.yaml && pnpm install
	
# format
fmt:
	pnpm fmt

# Remix
run:
	pnpm -F @apps/remix_hono dev