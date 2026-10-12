# Where every number comes from

All values were copied from the official data cubes (Excel files) on the publisher's website on 12 October 2026. `scripts/build_data.py` holds the copied numbers and writes the CSV files, so you can trace every value back to its table.

| CSV file | Publisher and release | Table in the Excel file | What was taken |
|---|---|---|---|
| `nsmhw_headline.csv` | ABS, National Study of Mental Health and Wellbeing 2020–2022 (released 5 Oct 2023) | Key statistics on the release page | 42.9% lifetime disorder, 21.5% 12-month disorder (ages 16–85) |
| `nsmhw_disorder_age_sex.csv` | ABS NSMHW 2020–22 | Table 3.3 "12-month mental disorder groups by age and sex: Proportion" | % with anxiety, affective, substance use and any disorder, by 7 age groups × sex. Females 75–85 substance use is shown as "—" (nil or rounded to zero) in the source and stored as 0.0 |
| `nsmhw_k10_age_sex.csv` | ABS NSMHW 2020–22 | Table 16.3 "Psychological distress by age and sex: Proportion" | % at each K10 level (Low, Moderate, High, Very high) |
| `nsmhw_help_seeking.csv` | ABS NSMHW 2020–22 | Table 6.3, block "Lifetime mental disorder with 12-month symptoms" | "At least one consultation…" (= *Saw a health professional*) and "Total persons with a lifetime mental disorder with 12-month symptoms". *Did not* = total − saw, which matches the "No consultations" row in the same table |
| `states.csv` → `disorder_12m` | ABS NSMHW 2020–22, state and territory data cubes | Table 1.3 in each state file, row "Any lifetime mental disorder with 12-month symptoms", Persons | |
| `states.csv` → `k10_high_vhigh`, `mental_behavioural` | ABS, National Health Survey 2022 (released 15 Dec 2023) | NHSDC02, Table 2.3 (crude proportion, not age-standardised) | High/very high psychological distress (adults 18+); Mental and behavioural conditions (all ages) |
| `states.csv` → `mbs_patients`, `mbs_rate`, `mbs_services` | AIHW, Medicare mental health services 2024–25 (updated 12 May 2026) | Table MBS.3, "All providers", 2024–25 | Patients, patient rate per 1,000 population, services |
| `nhs_trend.csv` | ABS NHS 2022 | NHSDC01, Table 1.3 (crude proportion) | Same two measures for 2001 to 2022 |
| `mbs_state_trend.csv` | AIHW MBS 2024–25 | Table MBS.3, "All providers", patient rate per 1,000 | 2015–16 to 2024–25 by state |
| `mbs_age_sex_trend.csv` | AIHW MBS 2024–25 | Table MBS.4, "All providers", patient rate per 1,000 | 2015–16 to 2024–25 by sex and age group |
| `australia_states.geojson` | github.com/tonywr71/GeoJson-Data, `australian-states.json` | | State outlines. Coordinates rounded to 3 decimal places (about 100 m), which cut the file to 15 KB |

The columns `lon`, `lat`, `col`, `row`, `label_lon`, `label_lat` in `states.csv` are layout positions I chose: where to put each circle and label on the maps, and where each tile sits in the tile-grid map. They are not data.

## Links

- NSMHW: https://www.abs.gov.au/statistics/health/mental-health/national-study-mental-health-and-wellbeing/latest-release
- NHS 2022: https://www.abs.gov.au/statistics/health/health-conditions-and-risks/national-health-survey/latest-release
- AIHW Medicare mental health services: https://www.aihw.gov.au/mental-health/topic-areas/community-based-services/medicare-mental-health
