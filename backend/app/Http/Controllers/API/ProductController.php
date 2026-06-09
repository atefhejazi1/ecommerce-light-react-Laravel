<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $products = Product::all();

        return response()->json([
            "data" => $products,
        ], 200);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            "name" => "required|string|max:255",
            "description" => "nullable|string",
            "price" => "required|numeric|min:0",
            "category_id" => "required|exists:categories,id",
            "image" => "nullable|image|mimes:jpg,jpeg,png,webp|max:2048",
        ]);

        $path = null;

        if ($request->hasFile('image')) {
            $path = $request->file('image')->store('products', 'public');
        }

        Product::create([
            "name" => $request->name,
            "slug" => Str::slug($request->name),
            "description" => $request->description,
            "price" => $request->price,
            "category_id" => $request->category_id,
            "image" => $path,
        ]);

        return response()->json([
            "message" => "Product created successfully",
        ], 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $product = Product::find($id);

        if (!$product) {
            return response()->json([
                "message" => "Product not found",
            ], 404);
        }

        return response()->json([
            "data" => $product,
        ], 200);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $product = Product::find($id);

        if (!$product) {
            return response()->json([
                "message" => "Product not found",
            ], 404);
        }

        $request->validate([
            "name" => "sometimes|string|max:255",
            "description" => "nullable|string",
            "price" => "sometimes|numeric|min:0",
            "category_id" => "sometimes|exists:categories,id",
            "image" => "nullable|image|mimes:jpg,jpeg,png,webp|max:2048",
        ]);

        $updateData = [];

        if ($request->has('name')) {
            $updateData['name'] = $request->name;
            $updateData['slug'] = Str::slug($request->name);
        }

        if ($request->has('description')) {
            $updateData['description'] = $request->description;
        }

        if ($request->has('price')) {
            $updateData['price'] = $request->price;
        }

        if ($request->has('category_id')) {
            $updateData['category_id'] = $request->category_id;
        }

        if ($request->hasFile('image')) {
            // Delete old image if exists
            if ($product->image) {
                Storage::disk('public')->delete($product->image);
            }
            $updateData['image'] = $request->file('image')->store('products', 'public');
        }

        $product->update($updateData);

        return response()->json([
            "message" => "Product updated successfully",
            "data" => $product,
        ], 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $product = Product::find($id);

        if (!$product) {
            return response()->json([
                "message" => "Product not found",
            ], 404);
        }

        // Delete image if exists
        if ($product->image) {
            Storage::disk('public')->delete($product->image);
        }

        $product->delete();

        return response()->json([
            "message" => "Product deleted successfully",
        ], 200);
    }
}
