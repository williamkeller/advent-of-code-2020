

## Day 01

Pretty straightforward puzzle. The start of the contest was marred by the AoC server pooping out and serving
up a bad gateway error. How many thousands of people mashing the refresh button at the same time?

This year I'm trying to generalize my code into a reusable library. The data loader tonight reads a text file
of values and converts them to an integer, so if that ever comes up again (and it seems likely), I'm ready for
it. As each new type of data file comes up, make a custom loader for it, although generalize when possible.


## Day 02

Somehow, when I copied the data over, a couple of the lines got joined. It was enough to throw off my results,
and it took a couple tries before I thought to look at the data. What a pain.

Thinking of switching the file reading over to Promises. It wouldn't really gain me much, apart from practice.
Also might be interesting to wrap this whole thing up in an Electron project. I'd have to move the actual
puzzle solvers to a worker task, to keep from killing the GUI thread.

Or do a rust version. That might be fun too.


## Day 03

Fairly simple puzzle. I made a dumb error that cost me several minutes.

I also lost some time switching between test data and real data. I think I'm going to set up a second data
file for test data, and then pass the file name into the solvers.

## Day 04

Part one was pretty quick. It feels like there ought to be a better way to pull the passport records than the
way I was doing it. Maybe a multiline regex that looks for two newlines in a row?

Part two suuuuucked. The mistake was not handling cases where a regex matched less than the supplied value.
For instance, the passpord id is supposed to be nine digits, so I had a regex of /pid:(\d{9})/, which is fine,
unless the pid is 10 digits long, in which case I get a fall positive. So I had to make sure to add a
whitespace at the end of each one to keep that from happening. Huge pain in the rear.


## Day 05

I got started almost twenty minutes late on this one. By then, Eric was already done. He's creeping up on me.
The puzzle was straightforward, but hidden behind an overly complicated and obtuse description. It took me
several times reading through it before I understand what they were actually asking for. Once I understood the
problem, it was pretty quick. But between starting late and that initial confusion, this was another slow
solution.


## Day 06

Today's puzzle demonstrated a pretty fundamental weakness in Javascript. It doesn't have great array tools, or
even string tools for that matter. Sorting is just awful. There is no `uniq` method like Ruby's, you have to
convert an array into a set and then back into an array. Just awful.
I'm going to redo a couple of these puzzles in Ruby, I think, just to compare. Hopefully by tonight, I can
make a decision between sticking with Javascript or shifting to Ruby. Because switching course in mid-stream
is always the best approach.


## Day 07

Today's puzzle demonstrated a pretty fundamental weakness of my brain. I overcomplicated things, I used more
regex than was necessary, and just took too long doing it. I'd like to say "lesson learned", but we'll see.
Sticking with Javascript, by the way. I found a way to monkeypatch missing functionality onto Javascript
objects. It's not as good as Ruby (a general truism), but it works.


## Day 08

Today's puzzle was pretty easy. My only hangup was not thinking to make copy of the code in puzzle2, so when
it ran, it was running with all of the changed instructions, instead of just the one I was focusing on.
Figured that out, but it took a little longer than I would have liked. Still, a much better showing than the
last couple days.


## Day 09

A tricky one, with various off-by-one errors when indexing. Had to just print out arrays a couple times and
count to make sure all the values were there.


## Day 10

The first one was a simple list reordering and counting. Knocked that out pretty quick. The second looked much
formidable. I figured I was going to have to wait until tomorrow to solve, and it was going to be a solver
that I knew could be more efficient but was ok with it running for a few hours. It turned out to be easier 
than I was expecting.
