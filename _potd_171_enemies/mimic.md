---
name: Mimic
nickname: Mimic
image: ../mimic.png
start_floor: 171
end_floor: 179
agro: Proximity
hp: 34864
attack_damage: 3064
attack_type: Physical
vulnerabilities:
  bind: false
  heavy: false
  sleep: false
  slow: false
  stun: false
  resolution: false
gallery_only: true
abilities:
  - name: Infatuation
    description: 'inflicts pox (DoT potency 5, 10m); can be interrupted'
  - name: Deathtrap
    potency: 300
    description: 'telegraphed pointblank AoE'
notes:
  - 'Sometimes found in gold chests'
  - 'Pomander of Alteration transforms all enemies in a random room on the next
  floor into either mimics or mandragoras'
job_specifics:
  GNB:
    difficulty: Medium
  MCH:
    difficulty: Medium
  PLD:
    difficulty: Medium
  RDM:
    difficulty: Hard
  RPR:
    difficulty: Hard
    notes:
      - 'Strength or steel recommended'
      - 'If using no pomanders, kite after the Pox and Deathtrap combo to
      manage incoming damage'
  WAR:
    difficulty: Easy
---
