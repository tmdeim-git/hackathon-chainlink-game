Providers:
- they run functions/scripts by checking if conditions are met (ex: check if sender can actually claim the ressource, then claim it)
- usually is an API call (like /backend/claimRessource) but currently they directly implement the function needed

Scripts:
- they run admin-only transactions with no check
- use a provider to be certain if the scripts can be run 
- note: they dont check if the sender is the admin because a player could modify NFTs if conditions are met (ex: claim a ressource)