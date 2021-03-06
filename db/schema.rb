# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended to check this file into your version control system.

ActiveRecord::Schema.define(:version => 20130816075812) do

  create_table "comments", :force => true do |t|
    t.string   "name"
    t.text     "body"
    t.datetime "created_at", :null => false
    t.datetime "updated_at", :null => false
  end

  create_table "portfolios", :force => true do |t|
    t.string   "name"
    t.decimal  "capital"
    t.datetime "created_at",      :null => false
    t.datetime "updated_at",      :null => false
    t.decimal  "brokerage"
    t.decimal  "taxslipage"
    t.decimal  "totalextraround"
    t.decimal  "mriskstock"
    t.decimal  "mriskcapital"
    t.decimal  "mcats"
  end

  create_table "remarks", :force => true do |t|
    t.datetime "date"
    t.decimal  "op"
    t.decimal  "cp"
    t.decimal  "day_profit"
    t.string   "remark"
    t.integer  "trade_id"
    t.datetime "created_at", :null => false
    t.datetime "updated_at", :null => false
  end

  create_table "stocks", :force => true do |t|
    t.string   "name"
    t.decimal  "quote"
    t.decimal  "lastp"
    t.datetime "created_at", :null => false
    t.datetime "updated_at", :null => false
  end

  create_table "trades", :force => true do |t|
    t.string   "stock"
    t.decimal  "qty"
    t.decimal  "buy_price"
    t.datetime "buy_date"
    t.decimal  "bepoint"
    t.integer  "portfolio_id"
    t.datetime "created_at",   :null => false
    t.datetime "updated_at",   :null => false
  end

end
