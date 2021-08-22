# Parcel external SVG Test

Importing an SVG from an npm package will result in the error message

````
[~/Projekte/svg-test]$ npx parcel build ./src/index.html                                                                            *[main]
🚨 Build failed.

@parcel/transformer-js: Expected ;, got xmlns

  /Users/devatrox/Projekte/svg-test/node_modules/@primer/octicons/build/svg/archive-24.svg:3:19
````

The same does not happen with files located in the src folder.

I copied the exact same SVG file from the octicons package into the project folder and tested it. It builds and displays successfully. It happens with other packages as well, so it is not an octicons problem.

To test it, comment/uncomment the specific line at the top of src/index.tsx
````ts
...
import Svg from "@primer/octicons/build/svg/archive-24.svg";
// import Svg from "./archive-24.svg";
...
````
and run
````
npx parcel build ./src/index.html
````
