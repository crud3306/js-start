// String 对象属性
// =================
// 属性	描述
// constructor	对创建该对象的函数的引用
// length	字符串的长度
// prototype	允许您向对象添加属性和方法


// String 对象方法
// =================
// anchor()	创建 HTML 锚。
// big()	用大号字体显示字符串。
// blink()	显示闪动字符串。
// bold()	使用粗体显示字符串。
// concat()	连接字符串。
// fixed()	以打字机文本显示字符串。
// fontcolor()	使用指定的颜色来显示字符串。
// fontsize()	使用指定的尺寸来显示字符串。
// fromCharCode()	从字符编码创建一个字符串。

// charAt()	返回在指定位置的字符。
// charCodeAt()	返回在指定的位置的字符的 Unicode 编码。
// indexOf()	检索字符串，没找到返回-1。
// lastIndexOf()	从后向前搜索字符串，没找到返回-1。

// italics()	使用斜体显示字符串。
// link()	将字符串显示为链接。
// localeCompare()	用本地特定的顺序来比较两个字符串。
// strike()	使用删除线来显示字符串。
// small()	使用小字号来显示字符串。

// match()	找到一个或多个正则表达式的匹配。
// replace()	替换与正则表达式匹配的子串。
// search()	检索与正则表达式相匹配的值。
// slice()	提取字符串的片断，并在新的字符串中返回被提取的部分。
// split()	把字符串分割为字符串数组。

// sub()	把字符串显示为下标。
// sup()	把字符串显示为上标。

// substr()	从起始索引号提取字符串中指定数目的字符。
// substring()	提取字符串中两个指定的索引号之间的字符。

// toLowerCase()	把字符串转换为小写。
// toUpperCase()	把字符串转换为大写。
// toLocaleLowerCase()	把字符串转换为小写。
// toLocaleUpperCase()	把字符串转换为大写。

// toSource()	代表对象的源代码。
// toString()	返回字符串。
// valueOf()	返回某个字符串对象的原始值。




// 常用方法
var str = "abc123456abcdef";
console.log(str.replace('ab', 'cc'));

console.log(str.substr(1, 2));
console.log(str.substring(1, 2));

console.log(str.toLocaleUpperCase());
console.log(str.toUpperCase());




// string.indexOf(searchvalue, start)
// ------------------
// 参数
// searchvalue	必需。规定需检索的字符串值。
// start	可选的整数参数。规定在字符串中开始检索的位置。它的合法取值是 0 到 string Object.length - 1。如省略该参数，则将从字符串的首字符开始检索。
// 返回值
// Number	查找指定字符串第一次出现的位置，如果没找到匹配的字符串则返回 -1。








