const { main } = require("./main");

const output = `On the first day of Christmas my true love sent to me
A partridge in a pear tree

On the second day of Christmas my true love sent to me
Two turtle doves
And a partridge in a pear tree

On the third day of Christmas my true love sent to me
Three french hens
Two turtle doves
And a partridge in a pear tree

On the fourth day of Christmas My true love sent to me
Four calling birds
Three french hens
Two turtle doves
And a partridge in a pear tree

On the fifth day of Christmas My true love sent to me
Five gold rings
Four calling birds
Three french hens
Two turtle doves
And a partridge in a pear tree

On the sixth day of Christmas My true love sent to me
Six geese-a-laying
Five gold rings
Four calling birds
Three french hens
Two turtle doves
And a partridge in a pear tree

On the seventh day of Christmas My true love sent to me
Seven swans-a-swimming
Six geese-a-laying
Five gold rings
Four calling birds
Three french hens
Two turtle doves
And a partridge in a pear tree

On the eighth day of Christmas My true love sent to me
Eight maids-a-milking
Seven swans-a-swimming
Six geese-a-laying
Five gold rings
Four calling birds
Three french hens
Two turtle doves
And a partridge in a pear tree

On the ninth day of Christmas My true love sent to me
Nine ladies dancing
Eight maids-a-milking
Seven swans-a-swimming
Six geese-a-laying
Five gold rings
Four calling birds
Three french hens
Two turtle doves
And a partridge in a pear tree

On the tenth day of Christmas My true love sent to me
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

On the eleventh day of Christmas My true love sent to me
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

On the twelfth day of Christmas My true love sent to me
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
And a partridge in a pear tree`;

const standardiseFormatting = (raw) => {
  return (
    raw
      .toLowerCase()
      // Ignore punctuation
      .replace(/,/g, "")
      .replace(/\./g, "")
      // Replace - with ' ' empty whitespace
      .replace(/-/g, " ")
  );
};

describe("twelve days of christmas", () => {
  it("should return the lyrics for the song, The Twelve Days of Christmas", () => {
    const result = main();

    expect(standardiseFormatting(result)).toEqual(
      standardiseFormatting(output)
    );
  });
});
