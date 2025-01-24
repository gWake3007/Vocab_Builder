import * as Yup from 'yup';

// export const getCategoriesResponseSchemas = Yup.object().shape({});
export const getCategoriesResponseSchemas = Yup.array()
  .of(
    Yup.string()
      .oneOf(
        [
          'verb',
          'participle',
          'noun',
          'adjective',
          'pronoun',
          'numerals',
          'adverb',
          'preposition',
          'conjunction',
          'phrasal verb',
          'functional phrase',
        ],
        'Invalid category'
      )
      .required('Category is required')
  )
  .required('Response must be an array of categories')
  .min(1, 'The array must contain at least one category');

export const createNewWordRequestSchema = Yup.object().shape({
  en: Yup.string()
    .required('New word in English is required')
    .matches(
      /^[a-zA-Z\- ]+$/,
      'English word must only contain letters, hyphens, or spaces (e.g., know-knew-known)'
    ),
  ua: Yup.string()
    .required('New word in Ukrainian is required')
    .matches(
      /^[а-яА-ЯёЁіІїЇєЄґҐ\'\- ]+$/,
      'Ukrainian word must only contain Cyrillic letters, hyphens, apostrophes, or spaces'
    ),
  category: Yup.string()
    .required('Category is required')
    .oneOf(
      [
        'verb',
        'participle',
        'noun',
        'adjective',
        'pronoun',
        'numerals',
        'adverb',
        'preposition',
        'conjunction',
        'phrasal verb',
        'functional phrase',
      ],
      'Category must be one of the allowed values: verb, participle, noun, etc.'
    ),
  isIrregular: Yup.boolean()
    .nullable() // Поле може бути `null`, якщо не вимагається
    .when('category', {
      is: 'verb', // Умовно, якщо category === 'verb'
      then: Yup.boolean().required(
        'The isIrregular field is required if category is verb'
      ),
      otherwise: Yup.boolean().notRequired(), // Інакше поле не обов’язкове
    }),
});

export const createNewWordResponseSchema = Yup.object().shape({
  _id: Yup.string()
    .required('New word ID is required')
    .matches(
      /^[a-fA-F0-9]{24}$/,
      'New word ID must be a valid 24-character MongoDB ObjectId'
    ),
  en: Yup.string()
    .required('New word in English is required')
    .min(1, 'English word must contain at least 1 character')
    .max(100, 'English word must not exceed 100 characters'),
  ua: Yup.string()
    .required('New word in Ukrainian is required')
    .min(1, 'Ukrainian word must contain at least 1 character')
    .max(100, 'Ukrainian word must not exceed 100 characters'),
  category: Yup.string()
    .required('New word category is required')
    .oneOf(
      [
        'verb',
        'participle',
        'noun',
        'adjective',
        'pronoun',
        'numerals',
        'adverb',
        'preposition',
        'conjunction',
        'phrasal verb',
        'functional phrase',
      ],
      'Category must be one of the allowed values'
    ),
  isIrregular: Yup.boolean().required('Verb type (isIrregular) is required'),
  owner: Yup.string()
    .required('Owner ID is required')
    .matches(
      /^[a-fA-F0-9]{24}$/,
      'Owner ID must be a valid 24-character MongoDB ObjectId'
    ),
  progress: Yup.number()
    .required('Progress is required')
    .min(0, 'Progress cannot be less than 0')
    .max(100, 'Progress cannot exceed 100'),
});
