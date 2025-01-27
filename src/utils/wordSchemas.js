import * as Yup from 'yup';

export const getCategoriesResponseSchema = Yup.array()
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

export const addNewWordResponseSchema = Yup.object().shape({
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

export const editWordRequestSchema = Yup.object().shape({
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
});

export const editWordResponseSchema = Yup.object().shape({
  _id: Yup.string()
    .required('Word ID')
    .matches(
      /^[a-fA-F0-9]{24}$/,
      'Word ID must be a valid 24-character MongoDB ObjectId'
    ),
  en: Yup.string()
    .required('New word`s option in English is required')
    .min(1, 'English word must contain at least 1 character')
    .max(100, 'English word must not exceed 100 characters'),
  ua: Yup.string()
    .required('New word`s option in Ukrainian is required')
    .min(1, 'Ukrainian word must contain at least 1 character')
    .max(100, 'Ukrainian word must not exceed 100 characters'),
  category: Yup.string()
    .required('New word`s category is required')
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

export const GetAllWordsResponseSchema = Yup.object().shape({
  results: Yup.array()
    .of(
      Yup.object().shape({
        _id: Yup.string()
          .matches(
            /^[a-fA-F0-9]{24}$/,
            'Word ID must be a valid 24-character hexadecimal string'
          )
          .required('Word ID is required'),
        en: Yup.string()
          .min(1, 'Word in English must not be empty')
          .required('Word in English is required'),
        ua: Yup.string()
          .min(1, 'Word in Ukrainian must not be empty')
          .required('Word in Ukrainian is required'),
        category: Yup.string()
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
          .required('Word category is required'),
        isIrregular: Yup.boolean().required(
          'Verb type (isIrregular) is required'
        ),
      })
    )
    .required('Results array is required'),
  totalPages: Yup.number()
    .integer('Total pages must be an integer')
    .min(1, 'Total pages must be at least 1')
    .required('Total pages are required'),
  page: Yup.number()
    .integer('Page must be an integer')
    .min(1, 'Page must be at least 1')
    .required('Page is required'),
  perPage: Yup.number()
    .integer('Per page must be an integer')
    .min(1, 'Per page must be at least 1')
    .required('Per page is required'),
});

export const GetUsersWordsResponseSchema = Yup.object().shape({
  results: Yup.array()
    .of(
      Yup.object().shape({
        _id: Yup.string()
          .matches(
            /^[a-fA-F0-9]{24}$/,
            'Word ID must be a valid 24-character hexadecimal string'
          )
          .required('Word ID is required'),
        en: Yup.string()
          .min(1, 'Word in English must not be empty')
          .required('Word in English is required'),
        ua: Yup.string()
          .min(1, 'Word in Ukrainian must not be empty')
          .required('Word in Ukrainian is required'),
        category: Yup.string()
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
          .required('Word category is required'),
        isIrregular: Yup.boolean().required(
          'Verb type (isIrregular) is required'
        ),
        owner: Yup.string()
          .matches(
            /^[a-fA-F0-9]{24}$/,
            'Owner ID must be a valid 24-character hexadecimal string'
          )
          .required('Owner ID is required'),
        progress: Yup.number()
          .min(0, 'Progress must be at least 0')
          .max(100, 'Progress cannot exceed 100')
          .required('Progress is required'),
      })
    )
    .required('Results array is required'),
  totalPages: Yup.number()
    .integer('Total pages must be an integer')
    .min(1, 'Total pages must be at least 1')
    .required('Total pages are required'),
  page: Yup.number()
    .integer('Page must be an integer')
    .min(1, 'Page must be at least 1')
    .required('Page is required'),
  perPage: Yup.number()
    .integer('Per page must be an integer')
    .min(1, 'Per page must be at least 1')
    .required('Per page is required'),
});

export const DeleteWordResponseSchema = Yup.object().shape({
  _id: Yup.string()
    .matches(
      /^[a-fA-F0-9]{24}$/,
      '_id must be a valid 24-character hexadecimal string'
    )
    .required('_id is required'),
  message: Yup.string()
    .min(1, 'Message must not be empty')
    .required('Message is required'),
});

export const GetUsersStatisticsResponseSchema = Yup.object().shape({
  totalCount: Yup.number()
    .integer('Total count must be an integer')
    .min(0, 'Total count cannot be negative')
    .required('Total count is required'),
});

export const GetUsersTasksResponseSchema = Yup.object().shape({
  words: Yup.array()
    .of(
      Yup.object().shape({
        _id: Yup.string()
          .required('_id is required')
          .matches(/^[a-fA-F0-9]{24}$/, '_id must be a valid MongoDB ObjectId'),
        ua: Yup.string()
          .required('Word in Ukrainian is required')
          .min(1, 'Word in Ukrainian cannot be empty'),
        task: Yup.string()
          .required('Task is required')
          .oneOf(['en', 'ua'], 'Task must be "en" or "ua"'),
      })
    )
    .required('Words array is required'),
});

export const PostAnswersRequestSchema = Yup.array().of(
  Yup.object().shape({
    _id: Yup.string()
      .required('_id is required')
      .matches(/^[a-fA-F0-9]{24}$/, '_id must be a valid MongoDB ObjectId'),
    en: Yup.string()
      .required('Word in English is required')
      .min(1, 'Word in English cannot be empty'),
    ua: Yup.string()
      .required('Word in Ukrainian is required')
      .min(1, 'Word in Ukrainian cannot be empty'),
    task: Yup.string()
      .required('Task is required')
      .oneOf(['en', 'ua'], 'Task must be either "en" or "ua"'),
  })
);

export const PostAnswersResponseSchema = Yup.array().of(
  Yup.object().shape({
    _id: Yup.string()
      .required('_id is required')
      .matches(/^[a-fA-F0-9]{24}$/, '_id must be a valid MongoDB ObjectId'),
    en: Yup.string()
      .required('Word in English is required')
      .min(1, 'Word in English cannot be empty'),
    ua: Yup.string()
      .required('Word in Ukrainian is required')
      .min(1, 'Word in Ukrainian cannot be empty'),
    task: Yup.string()
      .required('Task is required')
      .oneOf(['en', 'ua'], 'Task must be either "en" or "ua"'),
    isDone: Yup.boolean().required("Answer's result is required"),
  })
);
