module Api::V1
  class NoticeController < ApplicationController
    def index
      @notices = Notice.all
      render json: @notices
    end
  end
end
