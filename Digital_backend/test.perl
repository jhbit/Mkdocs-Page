# Hash data structure
%hash_array = ('name' ,'skt', 'price', 1);

%hash_array = ('name'=>'skt', 'price'=> 2);

print "hash1 $hash_array{'price'}, $hash_array{'name'}\n";

%hash_array = (-name=>'skt', -price=> 3);

print "hash2 $hash_array{-price}, $hash_array{-name}\n";

# Hash array
@hash = @hash_array{-name, -price};

print "hash array: @hash\n";

#Hash keys
@keys = keys %hash_array;
@values = values %hash_array;

print "Hash keys: @keys\nHash values: @values\n";

#Array data structure
@nub = (1..10);

# splice @ARRAY, OFFSET [ , LENGTH [ , LIST ] ]

splice(@nub, 2, 2, 5, 99);

print "replace array: @nub\n";

# sort by first ascii
@nub = sort(@nub);

print "sort array: @nub\n";

$var = @nub;

print "$var, @nub\n";

#Unless statement

$a = 20;
unless($a < 20){
    printf "a bigger or equal 20\n";
}


