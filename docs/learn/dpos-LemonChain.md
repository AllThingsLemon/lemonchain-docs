---
sidebar_position: 4
---

# Lemon Chain DPoS

Now that we've gone over the differences of Proof of Stake and Delegated Proof of Stake, we can get into what system Lemon Chain uses.

Lemon Chain has features from both Proof of Stake and Delegated Proof of Stake models.

**Unlike traditional Delegated Proof of Stake models which limit the number of active validators, the Lemon Chain network allows all registered validators to be active without any constraints. Therefore, in the Lemon Chain network, you can delegate and be assured that all active validators are participating.**

The difference between "active validators" and "total validators" describes the status of the validators within a blockchain network.

**1. Active Validators:** These are the validators that are currently participating in the consensus protocol of the network. They are actively creating blocks, proposing transactions, and participating in the validation process. The number of active validators may be limited depending on the specific protocol. For example, in the Solana network, there can only be 1,000 active validators at any given time, even though the total number of validators is ~3,400.

**2. Total Validators:** This is the total number of nodes in the network that have registered or signaled their willingness to become validators. This includes both the active validators and those that are currently in a waiting state. The ones in the waiting state are usually either waiting to be elected as active validators or are not currently chosen to be in the active validator set.

**Another way Lemon Chain sets itself apart from the traditional Delegated Proof of Stake is integrating voting in the form of attesting for the network's state. **

In traditional DPoS models, each token holder has a vote, and the weight of their vote is proportional to the number of tokens they hold. Voters can cast their votes for any delegate they want, and the delegates with the most votes are elected to be validators.

The voting process is typically done through a blockchain-based voting system. This system allows voters to cast their votes securely and anonymously. The voting system also tracks the votes and ensures that they are counted accurately.

The frequency of voting in a DPoS system varies from blockchain to blockchain. Some blockchains hold elections every few minutes, while others hold elections every few days or weeks. The frequency of elections is typically determined by the blockchain's design and the number of validators it needs.

In Lemon Chain DPoS, there is no voting system that elects a validator. Instead, validators vote on the validity and order of transactions. Here is an explanation:

**1. Event Block Creation:** Validators periodically create event blocks, which contain a list of transactions and other event blocks the validator knows of.

**2. Attesting Transactions:** In this context, 'Attesting' refers to the process of voting on the validity and order of these events (transaction history). Validators do this by creating new event blocks, which contain references to previous event blocks they've seen, thereby voting on their version of the truth. In order for a transaction to be finalized, more than $\frac{2}{3}$ of the validators have to agree to one truth (transaction validity and order).

**3. Transaction Finalization:** Once an event block has gathered sufficient attestations (votes) from a supermajority (two-thirds or more) of validators, it's considered a part of the finalized blockchain. This is a critical feature of BFT systems where finality is achieved when a supermajority of nodes agree on a decision, providing security against faulty or malicious nodes. 

**4. Rewards Distribution:** For their participation in maintaining the network and attesting to its state, validators are incentivized through a reward system, earning LEMX tokens for creating event blocks and correctly attesting to the state of the network.

Below you can see the differences between all systems:

| Feature               | PoS                                                                                   | DPoS                                                                                  | Lemon Chain               |
|-----------------------|---------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------|-------------------------|
| Active Validator Set  | Randomly selected                                                                     | Elected                                                                               | All                     |
| Form of Participation | Produce block on specific time-slot                                                   | Produce block on specific time-slot                                                   | Attest on network state |
| Finality              | Blocks from 2/3+1 unique validators out of the active validator set after a set block | Blocks from 2/3+1 unique validators out of the active validator set after a set block | 2 Blocks                |


