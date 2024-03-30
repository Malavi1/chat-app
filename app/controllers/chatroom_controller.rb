class ChatroomController < ApplicationController
    # before_action :require_user, only: [:new]
    def index
        @message = Message.new
        @messages = Message.custom_display
    end
end
