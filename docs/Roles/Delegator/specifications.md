---
sidebar_position: 2
---

# Specifications

A delegator is someone who assigns their stake to a validator and receives rewards as a result. By assigning their stake, delegators can engage in the network and earn rewards without needing the specialized knowledge or hardware necessary to operate a validator node on their own - you can do it straight from your smartphone or computer.

:::info Minimum stake amount

1 LEMX 

:::


**Staking Dashboard**

- Mainnet: https://stake.lemonchain.io/
- Testnet: https://stake.testnet.lemonchain.io/

Click on the following links if you'd like to perform an action straight away:

- [Stake LEMX](/docs/Roles/Delegator/How%20to%20stake/staking)
- [Unstake LEMX](/docs/Roles/Delegator/How%20to%20stake/unstaking)
- [Lock LEMX](/docs/Roles/Delegator/How%20to%20stake/locking)
- [Unlock LEMX](/docs/Roles/Delegator/How%20to%20stake/unlocking)
- [Withdraw LEMX rewards](/docs/Roles/Delegator/How%20to%20stake/rewards)

### When delegating, you have two choices:

#### 1. Delegate LEMX without a lockup period

If you stake your tokens without committing to a specific lock-in period, you'll earn the lowest possible reward rate. You have the flexibility to unstake your LEMX tokens whenever you wish.

#### 2. Delegate LEMX & lock for certain period

By staking your tokens with a commitment to a lock-up period, even for the minimum duration, you'll receive higher rewards compared to not locking them. The lock-up period can vary from 12 days (the minimum) to 1,095 days (the maximum (~3 years)), with the reward rate increasing alongside the length of time you lock your LEMX.

### Unbonding Period

Regardless of whether you choose to lock your tokens or not, a 7-day unbonding period applies when unstaking. This is the interval from the moment you unstake to when your LEMX becomes accessible to withdraw. Once these 7 days have elapsed following your unstaking transaction, you will be able to visit the [staking dashboard](https://stake.lemonchain.io/) and withdraw your staked LEMX.

:::info keep in mind
The unbonding period only applies to unstaking. It does not apply to claiming and withdrawing your earned rewards. You can withdraw your rewards at any time for all the past epochs since your initial stake transaction. 

:::

### Delegation Fee

Delegating allows you to assign your stake to a validator without needing the 350,000 LEMX, specialized knowledge, or hardware required to run a validator node independently. In exchange for this service, the network imposes a fixed fee of 12% on all staking rewards earned by delegators. This fee is directly compensated to the validators for operating their nodes.

#### Example:

- You stake 1,000 LEMX at a 10% APR, expecting a total of 1,100 LEMX by year-end.
- By the end of the year, you receive 1,088 LEMX, and the validator you staked to receives 12 LEMX.


### Locking 

Locking your staked LEMX for a set period typically yields higher rewards than not locking. However, if you choose to unlock your LEMX before the designated period ends, be aware that this will result in a 50% penalty on your accrued rewards.

#### Example Scenario:

- Suppose you stake 1,000 LEMX at a 10% annual percentage rate (APR) for one year, anticipating a total of 1,100 LEMX by the year's end.
- If you opt to unlock your LEMX after 6 months, instead of earning the expected 50 LEMX in rewards (half of the yearly 100 LEMX), you'll only receive 25 LEMX due to the early unlock penalty.

It's important to note that you can claim all of your rewards while your LEMX remains locked. For instance, by the 6-month mark, you could have claimed 50 LEMX. So how is the penalty applied? The penalty is applied to your initial stake. 

#### Continuing with the example:

- You have 1,000 LEMX locked and 6 months in you have already claimed 50 LEMX in rewards.
- On deciding to unlock the 1,000 LEMX early, the 50% penalty on the 50 LEMX rewards is applied.
- Therefore, when you unlock and unstake, you receive 975 LEMX (since 25 LEMX is deducted as a penalty).

In summary, early unlocking doesn't affect your initial stake; it only applies a 50% penalty on your accumulated rewards. In this example, after unlocking, you end up with a total of 1,025 LEMX (975 LEMX from the stake and 50 LEMX in previously claimed rewards).

### Slashing

If a validator is slashed due to malicious actions, stakeholders who have delegated their LEMX to the validator also lose their entire stake. This policy is integral to the health and security of the Lemon network, ensuring that all participants bear responsibility for maintaining network integrity. You can read more about slashing [here](/docs/Roles/Validator/specifications#slashing).