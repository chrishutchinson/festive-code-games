# Twelve days of Christmas counter speed-run

> How fast can you create an app that counts to twelve (for the days of Christmas...) in **JavaScript** without using a framework? Browser or server, your choice

## The challenge

Choose your approach, **browser** or **server**...

### Browser

If you're building a client app, you need to:

1. Serve a web page at a URL of your choice
2. Display a counter in a H1 tag starting at 1
3. Display a button labelled ("next day")
4. When the "next day" button is pressed, the counter should increase by 1
5. If the browser is reloaded, the count should persist
6. If the count reaches 12, the counter should reset to 1 the next time the button is pressed

### Server

If you're building a server app, you need to:

1. Respond to a HTTP POST at a URL of your choice
2. That response needs to contain a single property "count", starting at 1

   ```json
   {
     "count": 1
   }
   ```

3. When the HTTP POST request is sent again, the count should increase by 1
4. If the count reaches 12, the counter should reset to 1 the next time a request is sent

## The winner

The winner will be the first to complete their counter, proving it passes the tests in either the `server` or `browser` directories.

## Additional rules

### Browser

- You can use a development server if you want (e.g. Parcel, Webpack Dev Server, Serve)
- You can use TypeScript and / or a bundler if you want (e.g. Webpack)
- You cannot use React, Vue, or any other UI framework
- You cannot use Next.js, Nuxt or any other kind of front-end framework

### Server

- You cannot use Express or any other HTTP framework, only what's included in Node v16+
- You can use TypeScript and / or `ts-node` if you want
- You cannot use Next.js, Remix or any other kind of framework
