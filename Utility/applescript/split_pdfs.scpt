tell application "Adobe Acrobat"
	set activedoc to document 1
	set filepath to "/Users/jyim/Desktop"
	set filename to "blm"
	set page_index to 1
	set split_amount to 1
	set total_pages to count of pages of activedoc
	set loop_total to round (total_pages / split_amount)
	set x to 1
	repeat loop_total times
		make new document
		set newdoc to document 2
		bring to front newdoc
		insert pages newdoc after 0 from activedoc starting with page_index number of pages split_amount
		set pagecount to count of pages of newdoc
		delete pages newdoc first pagecount last pagecount
		save newdoc to filepath & "/" & filename & x & ".pdf"
		close document 2
		set page_index to page_index + split_amount
		set x to x + 1
	end repeat
end tell