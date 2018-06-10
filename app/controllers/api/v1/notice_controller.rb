module Api::V1
  class NoticeController < ApplicationController
    def index
      @notices = Notice.order("created_at DESC")
      render json: @notices
    end

    def create
      @notice = Notice.create(notice_params)
      render json: @notice
    end

    private

    def notice_params
      params.require(:notice).permit(:title, :body)
    end
  end
end
