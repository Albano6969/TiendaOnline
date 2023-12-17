<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class ProductController extends Controller
{
    public function index(Request $request)
{
    $maxPrice = $request->input('maxPrice', 2000);
    $minPrice = $request->input('minPrice', 0);
    $searchQuery = $request->input('query', '');

    $response = Http::get('https://dummyjson.com/products');
    $products = collect($response->json()['products']);

    // Filtro por rango de precio
    $filteredProducts = $products->filter(function ($product) use ($minPrice, $maxPrice) {
        return $product['price'] >= $minPrice && $product['price'] <= $maxPrice;
    });

    // Filtro por búsqueda
    if (!empty($searchQuery)) {
        $filteredProducts = $filteredProducts->filter(function ($product) use ($searchQuery) {
            return stripos($product['title'], $searchQuery) !== false ||
                   stripos($product['description'], $searchQuery) !== false;
        });
    }

    return response()->json(['products' => $filteredProducts->values()->all()]);
}


}
