use strict;
use Time::HiRes qw(time);
use LWP::UserAgent;
use JSON::XS;

my (@body, $body, $json, $ua, $t);

$ua = new LWP::UserAgent;
$ua->request(HTTP::Request->new('GET', 'http://dreadatour.ru/larry.js'), sub { push @body, shift });

$t = time;
$body = join('', @body) foreach 1..100;
printf "join: %dms\n", int((time - $t) * 1000 + 0.5);

$t = time;
$json = JSON::XS->new->ascii->decode($body) foreach 1..100;
printf "parse: %dms\n", int((time - $t) * 1000 + 0.5);

