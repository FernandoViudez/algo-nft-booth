Front end for NFT Minting Booth

Setup is:
1. Artists create and upload image + metadata to IPFS
2. User comes to second table where admins logged into web wallet 
3. Let user choose from recently uploaded work
4. Admin they sign a transaction to create the ASA

If the user already has a funded mobile wallet account, we open a modal to let them share their account QR code and prompt them to opt into the asset, then send them the asset

If the user does _not_ already have a funded mobile wallet account, we create one and seed it and transfer the ASA then present a QR code to allow them to import the account it was sent to directly to their wallet.

## TODO

"Already have account" scanner fix

Directions to rekey account if we create for them 

Email or share to user