class MessagesController < ApplicationController

  def index
  end

  def create
    message = Messages.create(message_params)
    redirect_to group_messages_path
  end

  private
  def message_params
    params.require(:message).permit(:body).merge(user_id: current_user.id, message_id: params[:message_id])
  end
end
