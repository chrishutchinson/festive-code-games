# Christmas code golf challenge

## The challenge

Print the "12 Days Of Christmas" lyrics.

```
On the first day of Christmas my true love sent to me
A partridge in a pear tree

On the second day of Christmas my true love sent to me
Two turtle doves
And a partridge in a pear tree

...

On the twelfth day of Christmas my true love sent to me
Twelve drummers drumming
Eleven pipers piping
Ten lords-a-leaping
Nine ladies dancing
Eight maids-a-milking
Seven swans-a-swimming
Six geese-a-laying
Five gold rings
Four calling birds
Three french hens
Two turtle doves
And a partridge in a pear tree
```

## Rules

- You must use JavaScript (Anything compatible with Node v16+)
- It must pass the test suite provided in this directory
- You don't have to worry about capitalisation; the entire text can be case insensitive
- You can sensibly ignore any punctuation: hyphens can be spaces, and commas and periods can be ignored
- There should be a blank line between each verse
- You must ordinalise your numbers: "first day of Christmas", "Four calling birds", etc.

## How to verify

1. Enter your code into the `main` function defined in `main.js`. Only the contents of this function will count towards your character total.
2. Run the tests with `yarn test` (after running `yarn` to install dependencies)
