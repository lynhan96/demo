ssh -i /Users/thuanphan/Library/Mobile\ Documents/com\~apple\~CloudDocs/keys/exchange-crypto.cer ubuntu@15.164.173.82
tar czf nextbuild.tgz .next
scp -i /Users/thuanphan/Library/Mobile\ Documents/com\~apple\~CloudDocs/keys/exchange-crypto.cer nextbuild.tgz ubuntu@15.164.173.82:/data/website
