export interface Expense {
    id: number,
    monto: number,
    description: string
    date?: string
    category_id: number,
    user_id?: number,
    
}