export const DisabilityOptions = [
    { value: 'physical_disability', label: 'Physical Disability' },
    { value: 'intellectual_disability', label: 'Intellectual Disability' },
    { value: 'mental_disability', label: 'Mental Disability' },
    { value: 'nerological', label: 'Neurological' },
    { value: 'bllod_disability', label: 'Blood Disability' },
    { value: 'multiple_disability', label: 'Multiple Disability' }
];
  
export const SchemeAndServiceCategoryOptions = [
    { value: 'educational', label: 'Educational' },
    { value: 'health', label: 'Health' },
    { value: 'financial', label: 'Financial' },
    { value: 'skill_and_employment', label: 'Skill & Employment' }
];
  
export const AnnualIncomeOptions = [
    { value: 'between_0_and_20000', label: '0-20,000' },
    { value: 'between_20000_and_50000', label: '20,000-50,000' },
    { value: 'above_50000', label: '>50,000' }
]

export const SearchResults = [
    {
        id:'educational',
        title: 'Education Scheme & Entitlement',
        sub_title:[
            {
                label: '3% Reservation for CWSN with benchmark disability in private unaided school',
                questions: [
                    {
                        question: 'What are the entitlements?',
                        answers: [
                            {
                                answer:'3% reservation for PWDs among Economically Weaker Sections/Disadvantaged Group (EWS/DG) in private schools'
                            },
                            {
                                answer:'Free books, uniforms and writing material to be provided by the schools'
                            },
                            {
                                answer:'Facility of a special educator'
                            }
                        ]
                    },
                    {
                        question: 'What are the eligibility requirements?'
                    },
                    {
                        question:'What are the documents required?'
                    }
                ]
            }
        ]
    }
]