declare function handleRequest(url: string, method: "GET" | "POST"): void;

// const req = { url: "https://example.com", method: "GET" as "GET" };
// handleRequest(req.url, req.method);

// const req = { url: "https://example.com", method: "GET" };
// handleRequest(req.url, req.method as "GET");

const req = { url: "https://example.com", method: "GET" } as const;
handleRequest(req.url, req.method);