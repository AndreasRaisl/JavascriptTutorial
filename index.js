
function reverse (string)
{
	return Array.from(string).reverse().join("");
}

function palindrome (string)
{
	lowerCaseString = string.toLowerCase();
	return lowerCaseString === reverse(lowerCaseString);
}

function Phrase(content)
{
	this.content = content;
	this.palindrome = function palindrome()
	{		
		return this.getProcessedContent() === reverse(this.getProcessedContent());
	}

	this.getProcessedContent = function ()
	{
		return this.content.toLowerCase();
	}
}

function TranslatedPhrase(content, translation)
{
	this.content = content;
	this.translation = translation;
}

TranslatedPhrase.prototype = new Phrase();