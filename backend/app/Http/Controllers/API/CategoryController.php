<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $catgories =  Category::all();

        return response()->json([
            "data" => $catgories,
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
            "image" => "nullable|image|mimes:jpg,jpeg,png,webp|max:2048",
        ]);

        $path = null;

        if ($request->hasFile('image')) {
            $path = $request->file('image')->store('categories', 'public');
        }

        Category::create([
            "name" => $request->name,
            "slug" => Str::slug($request->name),
            "description" => $request->description,
            "image" => $path,
        ]);

        return response()->json([
            "message" => "Category created successfully",
        ], 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $category = Category::find($id);

        if (!$category) {
            return response()->json([
                "message" => "Category not found",
            ], 404);
        }

        return response()->json([
            "data" => $category,
        ], 200);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $category = Category::find($id);

        if (!$category) {
            return response()->json([
                "message" => "Category not found",
            ], 404);
        }

        $category->update([
            "name" => $request->name,
            "description" => $request->description,
        ]);

        return response()->json([
            "message" => "Category updated successfully",
            "data" => $category,
        ], 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $category = Category::find($id);

        if (!$category) {
            return response()->json([
                "message" => "Category not found",
            ], 404);
        }

        $category->delete();

        return response()->json([
            "message" => "Category deleted successfully",
        ], 200);
    }
}
