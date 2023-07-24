---
sidebar_position: 3
---

# Delegated Proof of Stake

Delegated proof-of-stake (DPoS) is a variation of proof-of-stake (PoS) that allows users to delegate their stake to other users, called validators. This means that users do not need to run their own validator node in order to participate in the consensus process. **It lowers the barrier for everyday individuals to participate in staking.** 

Delegated Proof-of-Stake (DPoS) operates in a similar fashion to Proof-of-Stake (PoS), with one key distinction: any user is empowered to delegate their tokens to a validator. This validator, in turn, earns rewards which are shared with the user. This approach seeks to democratize the network, enabling the average user to elect representatives responsible for executing validation-related tasks on their behalf. Essentially, DPoS gives the average blockchain user the ability to vote for delegates prepared to handle the technical aspects of transaction validation.

### Key components of DPoS:

### 1. Voting
An important quality of DPoS is its voting procedure. The protocol determines each user's voting capacity based on the quantity of the blockchain's native tokens they have staked (this includes the validator's stake + delegations).

### 2. Node operators
The elected node operators hold the responsibility of creating new blocks of transactions to the blockchain. These individuals need to meet the mandatory hardware specifications set for block producers. But beyond these technical requirements, maintaining a strong reputation is critical to garner sufficient votes. Upon successful addition of new transaction blocks, witnesses earn rewards, which they may distribute among the stakers who supported them with their votes.

### 3. Transaction Time
DPoS significantly trims the transaction processing time compared to PoS. This efficiency is due to the fact that most DPoS blockchains make the decision to keep a limited network of witnesses, usually ranging between 20 and 100. With fewer validators, block verification becomes a quicker process.

### 4. Delegates
Delegates are pivotal to the DPoS blockchain's governance structure, as they propose changes that could potentially steer the future direction of the network. Following proposal, these changes are put up for a vote. All network participants who have staked the native token are eligible to engage in this governance voting process.

### A simple overview of how DPoS works:

1. Users stake their cryptocurrency.
2. Users delegate their stake to validators.
3. Validators are randomly selected to add blocks to the chain.
4. The validators verify the transactions in the block and add it to the chain.
5. The validators are rewarded with cryptocurrency for their work.

### To help you understand, here is an example:

A validator you have chosen has 100,000 tokens, which is the minimum requirement. 

You have 100 tokens that you want to stake. 

You want to stake for a year, at 10% APY, so you delegate these tokens to said validator.

Now, the validator has 100,100 tokens.

At the end of the year, the validator has 110,107.49 tokens.

So, at the end of the year, you get your initial 100 tokens back + the earned rewards, which is 110 tokens, and the validator keeps his rewards.

#### In a Proof-of-Stake model, this would not be possible. In order to stake, you would require the full 100,000 tokens (the minimum requirement by the blockchain).

:::caution note
**In most blockchain systems, there is a set fee that a validator gets from the delegated rewards.**
:::

In conclusion, the main difference between a DPoS system and a PoS system is that in a PoS system, only a select few are able to get rewards, as they are able to purchase the required minimum stake amount. In a DPoS system, more people are able to receive rewards as the minimum stake amount is lower for delegators.


