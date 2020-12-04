

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
