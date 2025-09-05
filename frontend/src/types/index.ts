export interface Article {
  id: string
  title: string
  content: string
  imageUrl: string
  publishedAt: Date
  comments: Comment[]
}

export interface Comment {
  id: string
  author: string
  content: string
  publishedAt: Date
}

export interface Role {
  id: number
  name: string
}

export interface User {
  id: string
  login: string
  roleId: number
  registeredAt: Date
}

export interface ApiResponse<T> {
  data?: T
  error?: string
}

export interface YandexWeatherApiResponse {
  geo_object: {
    locality: {
      name: string
    }
  }
  fact: {
    temp: number
    prec_strength: number
  }
}
