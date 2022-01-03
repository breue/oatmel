# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_12_26_160254) do

  create_table "active_storage_attachments", force: :cascade do |t|
    t.string "name", null: false
    t.string "record_type", null: false
    t.integer "record_id", null: false
    t.integer "blob_id", null: false
    t.datetime "created_at", null: false
    t.index ["blob_id"], name: "index_active_storage_attachments_on_blob_id"
    t.index ["record_type", "record_id", "name", "blob_id"], name: "index_active_storage_attachments_uniqueness", unique: true
  end

  create_table "active_storage_blobs", force: :cascade do |t|
    t.string "key", null: false
    t.string "filename", null: false
    t.string "content_type"
    t.text "metadata"
    t.integer "byte_size", null: false
    t.string "checksum", null: false
    t.datetime "created_at", null: false
    t.string "service_name", null: false
    t.index ["key"], name: "index_active_storage_blobs_on_key", unique: true
  end

  create_table "active_storage_variant_records", force: :cascade do |t|
    t.bigint "blob_id", null: false
    t.string "variation_digest", null: false
    t.index ["blob_id", "variation_digest"], name: "index_active_storage_variant_records_uniqueness", unique: true
  end

  create_table "avatars", force: :cascade do |t|
    t.string "role"
    t.string "img_key"
    t.string "slug"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "broadcasts", force: :cascade do |t|
    t.string "role"
    t.integer "recipients_size"
    t.string "slug"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "categories", force: :cascade do |t|
    t.string "role"
    t.string "name"
    t.string "slug"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "comments", force: :cascade do |t|
    t.string "role", default: "Approved", null: false
    t.integer "post_id"
    t.integer "user_id"
    t.integer "parent_id"
    t.text "description"
    t.integer "upvote_count", default: 1, null: false
    t.string "slug"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "favorites", force: :cascade do |t|
    t.integer "product_id"
    t.integer "user_id"
    t.integer "category_id"
    t.string "slug"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "feedbacks", force: :cascade do |t|
    t.integer "user_id"
    t.integer "review_id"
    t.integer "product_id"
    t.integer "score", default: 0, null: false
    t.string "slug"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "images", force: :cascade do |t|
    t.string "role", default: "Approved"
    t.integer "product_id"
    t.integer "user_id"
    t.string "slug"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "img_key"
  end

  create_table "notifications", force: :cascade do |t|
    t.integer "user_id"
    t.text "blob"
    t.boolean "seen", default: false, null: false
    t.string "slug"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "places", force: :cascade do |t|
    t.string "name"
    t.string "slug"
    t.string "pretty_slug"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "posts", force: :cascade do |t|
    t.string "role", default: "Approved", null: false
    t.integer "user_id"
    t.integer "category_id"
    t.string "category_name"
    t.string "name"
    t.text "description"
    t.integer "upvote_count", default: 1, null: false
    t.integer "comment_count", default: 0, null: false
    t.datetime "picked_at"
    t.boolean "pick_of_the_week", default: false, null: false
    t.text "participants", default: "--- []\n"
    t.integer "view_count", default: 0, null: false
    t.string "slug"
    t.string "pretty_slug"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "products", force: :cascade do |t|
    t.string "role", default: "Approved", null: false
    t.string "name"
    t.string "place_name"
    t.integer "place_id"
    t.integer "category_id"
    t.string "category_name"
    t.decimal "average_rating", default: "0.0", null: false
    t.integer "rating_count", default: 0, null: false
    t.datetime "picked_at"
    t.boolean "pick_of_the_week", default: false, null: false
    t.integer "view_count", default: 0, null: false
    t.string "slug"
    t.string "pretty_slug"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "url"
    t.string "img_front_key"
    t.string "img_back_key"
    t.string "img_extra_key"
    t.decimal "img_ratio", default: "0.0", null: false
  end

  create_table "reviews", force: :cascade do |t|
    t.string "role", default: "Approved", null: false
    t.integer "user_id"
    t.integer "product_id"
    t.text "description"
    t.integer "rating", default: 1, null: false
    t.integer "helpful_count", default: 0, null: false
    t.string "slug"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "upvotes", force: :cascade do |t|
    t.string "role"
    t.integer "user_id"
    t.integer "post_id"
    t.integer "comment_id"
    t.integer "score", default: 1, null: false
    t.string "slug"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "role", default: "User"
    t.string "first_name"
    t.string "last_name"
    t.string "email"
    t.string "image_url"
    t.integer "karma", default: 1, null: false
    t.integer "post_count", default: 0, null: false
    t.integer "unread_notifications", default: 0, null: false
    t.string "token"
    t.string "slug"
    t.string "pretty_slug"
    t.string "google_id"
    t.boolean "verified", default: false, null: false
    t.boolean "onboarded", default: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "img_key"
    t.boolean "unread_notifications_batch_emails", default: true
    t.boolean "featured_batch_emails", default: true
    t.boolean "subscribed", default: true
    t.text "email_settings"
    t.datetime "last_notified_at"
  end

  add_foreign_key "active_storage_attachments", "active_storage_blobs", column: "blob_id"
  add_foreign_key "active_storage_variant_records", "active_storage_blobs", column: "blob_id"
end
