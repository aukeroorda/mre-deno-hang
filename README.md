```sh
> deno --version
deno 1.41.3 (release, x86_64-apple-darwin)
v8 12.3.219.9
typescript 5.3.3
```

### MRE
Can be found at: https://github.com/aukeroorda/mre-deno-hang/tree/main

1. Verify the contents of the repo
2. Install the `paper-js` library as specified in the package file:
    ```sh
    npm install
    ```
3. Run deno:
    ```sh
    deno run mre.ts
    ```
4. Allow reading of `node_modules`: `y`
5. Observe that code executes to the end of the `mre.ts` script, but Deno hangs.


__Note__: 
Deno doesn't hang anymore if the following lines 20 and 21 are commented out: https://github.com/aukeroorda/mre-deno-hang/blob/6c3d8d0f313141bff39ffc0906780189668b055d/mre.ts#L20-L21

### Inspecting using chromium
I've tried to inspect what is going on with this library call using the chromium debugger, but I can't really see much, as the call gets 'hijacked' by a call to `node:timers` `setInterval()` function, and I lose the trace of the library function call here.
