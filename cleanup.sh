$!/bin/sh

find /home/menie/www/pose -maxdepth 1 -name "*.png" -mmin +20 -exec rm -f {} \;
find /home/menie/www/pose -maxdepth 1 -name "*.jpg" -mmin +20 -exec rm -f {} \;
