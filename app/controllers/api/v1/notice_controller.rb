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
    
    def update
      @notice = Notice.find(params[:id])
      @notice.update_attributes(notice_params)
      render json: @notice
    end

    def destroy
      @notice = Notice.find(params[:id])
      if @notice.destroy
        head :no_content, status: :ok
      else
        render json: @notice.errors, status: :unprocessable_entity
      end
    end

    private

    def notice_params
      params.require(:notice).permit(:title, :body)
    end
  end
end
