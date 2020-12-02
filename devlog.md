

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
