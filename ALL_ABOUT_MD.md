# Markdown Notes #

For the full dope on markdown, see [this great tutorial](https://www.markdowntutorial.com)

## Headers ##
These lines
```
# h1 #  
## h2 ##
### h3 ###
```
Create this output

# h1 #  
## h2 ##  
### h3 ###  

...and so on.

## Style ##
This
```
**bold**  
**also works for longer strings**  
_italicize_  
_italicize all this_  
**_combine it all like this_**  
_**Or like this**_  
```
Leads to this ...

**bold**  
**also works for longer strings**  
_italicize_  
_italicize all this_  
**_combine it all like this_**  
_**Or like this**_  


## Links ##
### Inline links ###
This
```
Inline links: [Visit GitHub](www.github.com)

Reference Link:
This is a [link][some place on the web]
This is another [link][some other place on the web]


[some place on the web]: www.someplace.com
{some other place on the web]: www.someotherplace.com
```
Gets you ...

Inline links: [Visit GitHub](www.github.com)

### Reference Link ###
```
This is a [link][some place on the web]
This is another [link][some other place on the web]


[some place on the web]: www.someplace.com
{some other place on the web]: www.someotherplace.com
```
Result:
This is a [link][some place on the web]
This is another [link][some other place on the web]


[some place on the web]: www.someplace.com
{some other place on the web]: www.someotherplace.com

## Images ##
This
```

Here is a picture of a ![naked penguin](http://worldanimalnews.com/wp-content/uploads/2017/04/macaroni1-3.jpg)


```
Will render like this

Here is a picture of a ![naked penguin](http://worldanimalnews.com/wp-content/uploads/2017/04/macaroni1-3.jpg)

To add an alt tag
```
Here is a picture of a ![naked penguin][alternate description](http://worldanimalnews.com/wp-content/uploads/2017/04/macaroni1-3.jpg)

[alternate description]:http://worldanimalnews.com/wp-content/uploads/2017/04/macaroni1-3.jpg
```

## Blockquote ##
This
```
>"This is the most amazing quote ever quoted since quoting became a thing, back in the days before quotes, when no one knew what a quote was, and it is sooo good you want the **entire** quote and just the main point which is...what was the main point?"


```
Results in
>"This is the most amazing quote ever quoted since quoting became a thing, back in the days before quotes, when no one knew what a quote was, and it is sooo good you want the **entire** quote and just the main point which is...what was the main point?"


And this
```
>"This is the most amazing quote ever quoted since quoting

>became a thing, back in the days before quotes,

>when no one knew what a quote was, and it is sooo good you..."

```
Becomes
>"This is the most amazing quote ever quoted since quoting ...

>became a thing, back in the days before quotes, ...

>when no one knew what a quote was, and it is sooo good you..."


## Other Tidbits ##
* Unordered lists
  * Nested ul by tabbing
1 Ordered lists
  1 Nest it by tabbing

* Mixing it up
  1 first
  2 second
  3 third

By adding two spaces you can make this:

fnadsjf afdaksjf aksjda akjfdka jak sfka a fkdajfka a fjdka jfdask

Into this:
fnadsjf afdaksjf aksjda   akjfdka jak sfka a   fkdajfka a fjdka jfdask
