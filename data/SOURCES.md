# Where every number comes from

All values were copied from the official data cubes (Excel files) on the publisher's website on 12 October 2026. `scripts/build_data.py` holds the copied numbers and writes the CSV files, so you can trace every value back to its table.

| CSV file | Publisher and release | Table in the Excel file | What was taken |
|---|---|---|---|
| `nsmhw_headline.csv` | ABS, National Study of Mental Health and Wellbeing 2020–2022 (released 5 Oct 2023) | Key statistics on the release page | 42.9% lifetime disorder, 21.5% 12-month disorder (ages 16–85) |
| `nsmhw_disorder_age_sex.csv` | ABS NSMHW 2020–22 | Table 3.3 "12-month mental disorder groups by age and sex: Proportion" | % with anxiety, affective, substance use and any disorder, by 7 age groups × sex. Females 75–85 substance use is shown as "—" (nil or rounded to zero) in the source and stored as 0.0 |
| `nsmhw_disorder_types.json` | ABS NSMHW 2020–22 | Table 2.1 (Estimate, '000) and Table 2.3 (Proportion), Persons | Number and % of people aged 16–85 with each specific 12-month disorder, plus the "Any anxiety / affective / substance use disorder" totals for each group. Stored as JSON with `id`/`parent` fields so Vega's `stratify` transform can build the hierarchy for the treemap |
| `nsmhw_k10_age_sex.csv` | ABS NSMHW 2020–22 | Table 16.3 "Psychological distress by age and sex: Proportion" | % at each K10 level (Low, Moderate, High, Very high) |
| `help_by_professional.csv` | Harris MG et al. (2025), "Consultation with health professionals for mental health in Australia in 2020–2022 and changes since 2007", *Australian and New Zealand Journal of Psychiatry* 59(9):810–823, doi:10.1177/00048674241307919 (analysis of ABS NSMHW 2020–22 data) | Table 3 "Consultation with health professionals for mental health in the past 12 months, by 12-month disorder class (2020–2022)" | % consulting any health professional, GP, psychologist, psychiatrist and other mental health professional, for affective, anxiety and substance use disorders and for any 12-month disorder. Table 5 gives the severity figures quoted in the caption (mild 22.9%, moderate 48.4%, severe 68.8%) |
| `nsmhw_help_seeking.csv` | ABS NSMHW 2020–22 | Table 6.3, block "Lifetime mental disorder with 12-month symptoms" | "At least one consultation…" (= *Saw a health professional*) and "Total persons with a lifetime mental disorder with 12-month symptoms". *Did not* = total − saw, which matches the "No consultations" row in the same table |
| `states.csv` → `disorder_12m` | ABS NSMHW 2020–22, state and territory data cubes | Table 1.3 in each state file, row "Any lifetime mental disorder with 12-month symptoms", Persons | |
| `states.csv` → `k10_high_vhigh`, `mental_behavioural` | ABS, National Health Survey 2022 (released 15 Dec 2023) | NHSDC02, Table 2.3 (crude proportion, not age-standardised) | High/very high psychological distress (adults 18+); Mental and behavioural conditions (all ages) |
| `states.csv` → `mbs_patients`, `mbs_rate`, `mbs_services` | AIHW, Medicare mental health services 2024–25 (updated 12 May 2026) | Table MBS.3, "All providers", 2024–25 | Patients, patient rate per 1,000 population, services |
| `nhs_trend.csv` | ABS NHS 2022 | NHSDC01, Table 1.3 (crude proportion) | Same two measures for 2001 to 2022 |
| `mbs_state_trend.csv` | AIHW MBS 2024–25 | Table MBS.3, "All providers", patient rate per 1,000 | 2015–16 to 2024–25 by state |
| `mbs_age_sex_trend.csv` | AIHW MBS 2024–25 | Table MBS.4, "All providers", patient rate per 1,000 | 2015–16 to 2024–25 by sex and age group |
| `sa4_services.csv` | AIHW MBS 2024–25, file "Medicare mental health services PHN SA4 2024-25.csv" (inside the data-table zip) + ABS ASGS 2021 SA4 boundaries | Rows with GeographicAreaType = SA4, FinancialYear 2024–25, ProviderType All providers | `patients` and `patients_per_1000` for 88 SA4 regions. `lon`/`lat` = centre of each region's largest polygon, calculated from the ABS ASGS 2021 SA4 boundaries (geo.abs.gov.au ArcGIS service, simplified to ~2 km). All 88 AIHW region codes and names matched the ABS boundaries exactly |
| `australia_states.geojson` | github.com/tonywr71/GeoJson-Data, `australian-states.json` | | State outlines. Coordinates rounded to 3 decimal places (about 100 m), which cut the file to 15 KB |

The columns `lon`, `lat`, `col`, `row`, `label_lon`, `label_lat` in `states.csv` are layout positions I chose for placing labels on the maps (`col`/`row` are left over from an earlier tile-map draft and are no longer used). They are not data.

## Links

- NSMHW: https://www.abs.gov.au/statistics/health/mental-health/national-study-mental-health-and-wellbeing/latest-release
- NHS 2022: https://www.abs.gov.au/statistics/health/health-conditions-and-risks/national-health-survey/latest-release
- AIHW Medicare mental health services: https://www.aihw.gov.au/mental-health/topic-areas/community-based-services/medicare-mental-health
